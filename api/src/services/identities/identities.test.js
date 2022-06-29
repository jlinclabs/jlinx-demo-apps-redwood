import {
  identities,
  identity,
  createIdentity,
  updateIdentity,
  deleteIdentity,
} from './identities'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('identities', () => {
  scenario('returns all identities', async (scenario) => {
    const result = await identities()

    expect(result.length).toEqual(Object.keys(scenario.identity).length)
  })

  scenario('returns a single identity', async (scenario) => {
    const result = await identity({ id: scenario.identity.one.id })

    expect(result).toEqual(scenario.identity.one)
  })

  scenario('creates a identity', async (scenario) => {
    const result = await createIdentity({
      input: { userId: scenario.identity.two.userId },
    })

    expect(result.userId).toEqual(scenario.identity.two.userId)
  })

  scenario('updates a identity', async (scenario) => {
    const original = await identity({ id: scenario.identity.one.id })
    const result = await updateIdentity({
      id: original.id,
      input: { userId: scenario.identity.two.userId },
    })

    expect(result.userId).toEqual(scenario.identity.two.userId)
  })

  scenario('deletes a identity', async (scenario) => {
    const original = await deleteIdentity({ id: scenario.identity.one.id })
    const result = await identity({ id: original.id })

    expect(result).toEqual(null)
  })
})
