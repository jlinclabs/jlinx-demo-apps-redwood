import { db } from 'src/lib/db'
import { context } from '@redwoodjs/graphql-server'
import {
  createSigningKeyPair,
  signingKeyToDidDocument,
} from 'jlinx-util'

export const identifiers = () => {
  return db.identifier.findMany()
}

export const identifier = ({ did }) => {
  return db.identifier.findUnique({
    where: { did },
  })
}

export const createIdentifier = () => {
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
