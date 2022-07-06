import {
  contractInstances,
  contractInstance,
  createContractInstance,
  updateContractInstance,
  deleteContractInstance,
} from './contractInstances'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('contractInstances', () => {
  scenario('returns all contractInstances', async (scenario) => {
    const result = await contractInstances()

    expect(result.length).toEqual(Object.keys(scenario.contractInstance).length)
  })

  scenario('returns a single contractInstance', async (scenario) => {
    const result = await contractInstance({
      id: scenario.contractInstance.one.id,
    })

    expect(result).toEqual(scenario.contractInstance.one)
  })

  scenario('creates a contractInstance', async () => {
    const result = await createContractInstance({
      input: { id: 'String', value: 'String' },
    })

    expect(result.id).toEqual('String')
    expect(result.value).toEqual('String')
  })

  scenario('updates a contractInstance', async (scenario) => {
    const original = await contractInstance({
      id: scenario.contractInstance.one.id,
    })

    const result = await updateContractInstance({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a contractInstance', async (scenario) => {
    const original = await deleteContractInstance({
      id: scenario.contractInstance.one.id,
    })

    const result = await contractInstance({ id: original.id })

    expect(result).toEqual(null)
  })
})
