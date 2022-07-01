import { db } from 'src/lib/db'

export const identifiers = () => {
  return db.identifier.findMany()
}

export const identifier = ({ id }) => {
  return db.identifier.findUnique({
    where: { id },
  })
}

export const createIdentifier = ({ input }) => {
  return db.identifier.create({
    data: input,
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
