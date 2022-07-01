import { db } from 'src/lib/db'
import { context } from '@redwoodjs/graphql-server'
import { createSigningKeyPair } from 'jlinx-util'

export const identifiers = () => {
  return db.identifier.findMany()
}

export const identifier = ({ id }) => {
  return db.identifier.findUnique({
    where: { id },
  })
}

export const createIdentifier = ({ input }) => {
  console.log('CREATE IDENTIFYER', {input, context})

  const did =
  const secretKey

  return db.identifier.create({
    data: {
      did,
      userId: context.currentUser.id
    },
  })
}

export const updateIdentifier = ({ id, input }) => {
  return db.identifier.update({
    data: input,
    where: { id },
  })
}

export const deleteIdentifier = ({ id }) => {
  return db.identifier.delete({
    where: { id },
  })
}

export const Identifier = {
  user: (_obj, { root }) =>
    db.identifier.findUnique({ where: { id: root.id } }).user(),
}
