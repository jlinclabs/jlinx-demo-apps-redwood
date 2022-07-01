import {
  identifiers,
  identifier,
  createIdentifier,
  updateIdentifier,
  deleteIdentifier,
} from './identifiers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('identifiers', () => {
  scenario('returns all identifiers', async (scenario) => {
    const result = await identifiers()

    expect(result.length).toEqual(Object.keys(scenario.identifier).length)
  })

  scenario('returns a single identifier', async (scenario) => {
    const result = await identifier({ id: scenario.identifier.one.id })

    expect(result).toEqual(scenario.identifier.one)
  })

  scenario('creates a identifier', async (scenario) => {
    const result = await createIdentifier({
      input: {
        did: 'String',
        secretKey: 'String',
        userId: scenario.identifier.two.userId,
      },
    })

    expect(result.did).toEqual('String')
    expect(result.secretKey).toEqual('String')
    expect(result.userId).toEqual(scenario.identifier.two.userId)
  })

  scenario('updates a identifier', async (scenario) => {
    const original = await identifier({ id: scenario.identifier.one.id })
    const result = await updateIdentifier({
      id: original.id,
      input: { did: 'String2' },
    })

    expect(result.did).toEqual('String2')
  })

  scenario('deletes a identifier', async (scenario) => {
    const original = await deleteIdentifier({ id: scenario.identifier.one.id })
    const result = await identifier({ id: original.id })

    expect(result).toEqual(null)
  })
})
