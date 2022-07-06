import { db } from 'src/lib/db'
// import { context } from '@redwoodjs/graphql-server'
import jlinx from 'src/services/jlinx'

export const contracts = () => {
  return db.contract.findMany()
}

export const contract = async ({ id }) => {
  const contract = await db.contract.findUnique({
    where: { id },
  })
  if (!contract) return
  const contractLedger = await jlinx.get(contract.id)
  await contractLedger.update()
  Object.assign(contract, {
    state: contractLedger.state,
    host: contractLedger.host,
    identifierDid: contractLedger.identifierDid,
    contractUrl: contractLedger.contractUrl,
  })
  console.log('GET CONTRACT', id, contract)
  return contract
}

export const createContract = async (options, { context }) => {
  console.log('CREATE CONTRACT', { options, context })
  console.log({ jlinx })
  // TODO ensure identifierDid exists and is ours
  const contract = await jlinx.createContract({
    identifierDid: options.identifierDid,
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
