import {
  profiles,
  profile,
  createProfile,
  updateProfile,
  deleteProfile,
} from './profiles'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('profiles', () => {
  scenario('returns all profiles', async (scenario) => {
    const result = await profiles()

    expect(result.length).toEqual(Object.keys(scenario.profile).length)
  })

  scenario('returns a single profile', async (scenario) => {
    const result = await profile({ id: scenario.profile.one.id })

    expect(result).toEqual(scenario.profile.one)
  })

  scenario('creates a profile', async (scenario) => {
    const result = await createProfile({
      input: {
        id: 'String',
        secretKey: 'String',
        value: 'String',
        userId: scenario.profile.two.userId,
      },
    })

    expect(result.id).toEqual('String')
    expect(result.secretKey).toEqual('String')
    expect(result.value).toEqual('String')
    expect(result.userId).toEqual(scenario.profile.two.userId)
  })

  scenario('updates a profile', async (scenario) => {
    const original = await profile({ id: scenario.profile.one.id })
    const result = await updateProfile({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a profile', async (scenario) => {
    const original = await deleteProfile({ id: scenario.profile.one.id })
    const result = await profile({ id: original.id })

    expect(result).toEqual(null)
  })
})
