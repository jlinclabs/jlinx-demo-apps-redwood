import { emails, email, createEmail, updateEmail, deleteEmail } from './emails'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('emails', () => {
  scenario('returns all emails', async (scenario) => {
    const result = await emails()

    expect(result.length).toEqual(Object.keys(scenario.email).length)
  })

  scenario('returns a single email', async (scenario) => {
    const result = await email({ id: scenario.email.one.id })

    expect(result).toEqual(scenario.email.one)
  })

  scenario('creates a email', async () => {
    const result = await createEmail({
      input: { email: 'String' },
    })

    expect(result.email).toEqual('String')
  })

  scenario('updates a email', async (scenario) => {
    const original = await email({ id: scenario.email.one.id })
    const result = await updateEmail({
      id: original.id,
      input: { email: 'String2' },
    })

    expect(result.email).toEqual('String2')
  })

  scenario('deletes a email', async (scenario) => {
    const original = await deleteEmail({ id: scenario.email.one.id })
    const result = await email({ id: original.id })

    expect(result).toEqual(null)
  })
})
