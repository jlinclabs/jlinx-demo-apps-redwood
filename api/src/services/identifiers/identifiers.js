import { db } from 'src/lib/db'
import { context } from '@redwoodjs/graphql-server'
import {
  createSigningKeyPair,
  signingKeyToDidDocument,
} from 'jlinx-util'

export const identifiers = () => {
  return db.identifier.findMany()
}

export const identifier = async ({ did }) => {
  const identifier = await db.identifier.findUnique({
    where: { did },
  })
  // console.log({ identifier })
  // if (identifier){
  //   identifier.signingKey = `${did}`.replace(/^did:key:/, '')
  //   identifier.didDocument = signingKeyToDidDocument(identifier.signingKey)
  // }
  // console.log({ identifier })
  return identifier
}

export const createIdentifier = (options, { context }) => {
  console.log('createIdentifier ???', context)
  const { publicKey, secretKey } = createSigningKeyPair()
  const didDocument = signingKeyToDidDocument(publicKey)
  const did = didDocument.id
  const data = {
    did,
    userId: context.currentUser.id,
    secretKey: secretKey.toString('hex'),
  }
  console.log('CREATE IDENTIFIES', data)
  return db.identifier.create({
    data,
  })
}

// export const updateIdentifier = ({ id, input }) => {
//   return db.identifier.update({
//     data: input,
//     where: { id },
//   })
// }

export const deleteIdentifier = ({ id }) => {
  return db.identifier.delete({
    where: { id },
  })
}

export const Identifier = {
  user: (_obj, { root }) =>
    db.identifier.findUnique({ where: { id: root.id } }).user(),
}
