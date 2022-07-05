import { db } from 'src/lib/db'
import { context } from '@redwoodjs/graphql-server'
import jlinx from 'src/services/jlinx'

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
  const contract = await jlinx.createContract()
  console.log({ contract })
  const data = {
    id: contract.id,
    userId: context.currentUser.id,
    value: contract.value,
  }
  const record = await db.contract.create({
    data,
  })
  console.log({ record })
  return record
}

export const updateContract = ({ id, input }) => {
  return db.contract.update({
    data: input,
    where: { id },
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
