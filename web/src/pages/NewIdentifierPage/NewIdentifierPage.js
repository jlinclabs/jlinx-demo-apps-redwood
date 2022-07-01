import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewIdentifierPage = () => {
  return (
    <>
      <MetaTags title="NewIdentifier" description="NewIdentifier page" />

      <h1>NewIdentifierPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/NewIdentifierPage/NewIdentifierPage.js</code>
      </p>
      <p>
        My default route is named <code>newIdentifier</code>, link to me with `
        <Link to={routes.newIdentifier()}>NewIdentifier</Link>`
      </p>
    </>
  )
}

export default NewIdentifierPage
