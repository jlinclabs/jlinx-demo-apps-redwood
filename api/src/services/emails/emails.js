import { db } from 'src/lib/db'

export const emails = () => {
  return db.email.findMany()
}

export const email = ({ id }) => {
  return db.email.findUnique({
    where: { id },
  })
}

export const createEmail = ({ input }) => {
  return db.email.create({
    data: input,
  })
}

export const updateEmail = ({ id, input }) => {
  return db.email.update({
    data: input,
    where: { id },
  })
}

export const deleteEmail = ({ id }) => {
  return db.email.delete({
    where: { id },
  })
}

export const Email = {
  User: (_obj, { root }) =>
    db.email.findUnique({ where: { id: root.id } }).User(),
}
