import {
  contracts,
  contract,
  createContract,
  updateContract,
  deleteContract,
} from './contracts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('contracts', () => {
  scenario('returns all contracts', async (scenario) => {
    const result = await contracts()

    expect(result.length).toEqual(Object.keys(scenario.contract).length)
  })

  scenario('returns a single contract', async (scenario) => {
    const result = await contract({ id: scenario.contract.one.id })

    expect(result).toEqual(scenario.contract.one)
  })

  scenario('creates a contract', async (scenario) => {
    const result = await createContract({
      input: {
        id: 'String',
        userId: scenario.contract.two.userId,
        value: 'String',
      },
    })

    expect(result.id).toEqual('String')
    expect(result.userId).toEqual(scenario.contract.two.userId)
    expect(result.value).toEqual('String')
  })

  scenario('updates a contract', async (scenario) => {
    const original = await contract({ id: scenario.contract.one.id })
    const result = await updateContract({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a contract', async (scenario) => {
    const original = await deleteContract({ id: scenario.contract.one.id })
    const result = await contract({ id: original.id })

    expect(result).toEqual(null)
  })
})
