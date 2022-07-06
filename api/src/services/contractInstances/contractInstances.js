import { db } from 'src/lib/db'

export const contractInstances = () => {
  return db.contractInstance.findMany()
}

export const contractInstance = ({ id }) => {
  return db.contractInstance.findUnique({
    where: { id },
  })
}

export const createContractInstance = ({ input }) => {
  return db.contractInstance.create({
    data: input,
  })
}

export const updateContractInstance = ({ id, input }) => {
  return db.contractInstance.update({
    data: input,
    where: { id },
  })
}

export const deleteContractInstance = ({ id }) => {
  return db.contractInstance.delete({
    where: { id },
  })
}

export const ContractInstance = {
  User: (_obj, { root }) =>
    db.contractInstance.findUnique({ where: { id: root.id } }).User(),
}
