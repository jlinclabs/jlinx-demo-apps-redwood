import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MyNewIdentifierPage = () => {
  return (
    <>
      <MetaTags title="MyNewIdentifier" description="MyNewIdentifier page" />

      <h1>MyNewIdentifierPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/MyNewIdentifierPage/MyNewIdentifierPage.js</code>
      </p>
      <p>
        My default route is named <code>myNewIdentifier</code>, link to me with
        `<Link to={routes.myNewIdentifier()}>MyNewIdentifier</Link>`
      </p>
    </>
  )
}

export default MyNewIdentifierPage
