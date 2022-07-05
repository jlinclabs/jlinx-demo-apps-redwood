import Path from 'path'
import b4a from 'b4a'
import JlinxClient from 'jlinx-client'
import { Contract, createContract } from './Contract'

const {
  JLINX_HOST,
  JLINX_VAULT_PATH,
  JLINX_VAULT_KEY,
} = process.env

const jlinx = new JlinxClient({
  hostUrl: JLINX_HOST,
  vaultPath: JLINX_VAULT_PATH,
  vaultKey: b4a.from(JLINX_VAULT_KEY, 'hex')
})

jlinx.docTypes.Contract = Contract
jlinx.createContract = createContract

console.log({jlinx})

export default jlinx
