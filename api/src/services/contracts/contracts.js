import { db } from 'src/lib/db'
// import { context } from '@redwoodjs/graphql-server'
import jlinx from 'src/services/jlinx'

export const contracts = () => {
  return db.contract.findMany()
}

export const contract = ({ id }) => {
  return db.contract.findUnique({
    where: { id },
  })
}

export const createContract = async (options, context) => {
  console.log('CREATE CONTRACT', { options, context })
  console.log({ jlinx })
  const contract = await jlinx.createContract({
    contractUrl: options.contractUrl,
  })
  console.log({ contract })
  const data = {
    id: contract.id,
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
