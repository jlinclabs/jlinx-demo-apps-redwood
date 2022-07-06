import { db } from 'src/lib/db'

export const contracts = () => {
  return db.contract.findMany()
}

export const contract = ({ id }) => {
  return db.contract.findUnique({
    where: { id },
  })
}

export const createContract = async ({ input }) => {
  console.log('CREATE CONTRACT', { input })
  return await db.contract.create({
    data: input,
  })
}

export const deleteContract = ({ id }) => {
  return db.contract.delete({
    where: { id },
  })
}

export const Contract = {
  user: (_obj, { root }) =>
    db.contract.findUnique({ where: { id: root.id } }).user(),
}
