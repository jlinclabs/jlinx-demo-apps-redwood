import { db } from 'src/lib/db'
import { context } from '@redwoodjs/graphql-server'

export const contracts = () => {
  return db.contract.findMany()
}

export const contract = ({ id }) => {
  return db.contract.findUnique({
    where: { id },
  })
}

export const createContract = async ({ contractUrl }) => {
  console.log('CREATE CONTRACT', { contractUrl })
  const data = {
    contractUrl,
    userId: context.currentUser.id,
  }
  return await db.contract.create({
    data,
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
