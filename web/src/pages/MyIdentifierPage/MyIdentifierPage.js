import { MetaTags, useQuery } from '@redwoodjs/web'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'src/components/Link'
import Timestamp from 'src/components/Timestamp'
import InspectObject from 'src/components/InspectObject'

// TMP because we cannot import jlinx-util
import BaseX from 'base-x'
import b64 from 'urlsafe-base64'
const base58BitcoinAlphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const base58 = BaseX(base58BitcoinAlphabet);


const MyIdentifierPage = ({ did }) => {

  return (
    <>
      <MetaTags title="MyIdentifier" description="MyIdentifier page" />
      <Container maxWidth="md" sx={{p: 2}}>
        <Identifier {...{ did }}/>
      </Container>
    </>
  )
}

export const QUERY = gql`
  query MyIdentifierByDid($did: String!) {
    identifier: identifier(did: $did) {
      did
      createdAt
    }
  }
`

export default MyIdentifierPage


const Identifier = ({ did }) => {
  const { loading, error, data } = useQuery(QUERY, {
    variables: { did }
  })
  console.log({ loading, error, data })
  const identifier = data?.identifier
  if (loading) return <CircularProgress/>
  if (loading) return <span>Spinner…</span>
  if (error) return <Alert severity="error">{error.message}</Alert>
  const signingKey = `${did}`.replace(/^did:key:/, '')
  const didDocument = signingKeyToDidDocument(signingKey)
  return <Paper
    sx={{
      // m: 4,
      p: 2,
    }}
  >
    <Typography variant="body1">{did}</Typography>
    <Typography variant="body2">Created at: <Timestamp at={identifier.createdAt}/></Typography>
    <Typography variant="body2">
      <pre><code>{JSON.stringify(didDocument, null, 2)}</code></pre>
    </Typography>
  </Paper>
}






// TMP

const signingKeyToDidDocument = function(publicKey){
  if (typeof publicKey === 'string') publicKey = b64.decode(publicKey)
  const base68EncodedPK = base58.encode(publicKey)
  const publicKeyMultibase = `z6mk${base68EncodedPK}`
  const did = `did:key:${publicKeyMultibase}`
  const didDocument = {
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/ed25519-2020/v1",
      "https://w3id.org/security/suites/x25519-2020/v1"
    ],
    "id": `${did}`,
    "verificationMethod": [{
      "id": `${did}#${publicKeyMultibase}`,
      "type": "Ed25519VerificationKey2020",
      "controller": `${did}`,
      "publicKeyMultibase": `${publicKeyMultibase}`
    }],
    "authentication": [
      `${did}#${publicKeyMultibase}`
    ],
    "assertionMethod": [
      `${did}#${publicKeyMultibase}`
    ],
    "capabilityDelegation": [
      `${did}#${publicKeyMultibase}`
    ],
    "capabilityInvocation": [
      `${did}#${publicKeyMultibase}`
    ],
    "keyAgreement": [{
      "id": `${did}#${publicKeyMultibase}`,
      "type": "X25519KeyAgreementKey2020",
      "controller": `${did}`,
      "publicKeyMultibase": `${publicKeyMultibase}`
    }]
  }

  return didDocument
}
