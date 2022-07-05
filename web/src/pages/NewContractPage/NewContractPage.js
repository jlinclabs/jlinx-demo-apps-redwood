import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewcontractPage = () => {
  return (
    <>
      <MetaTags title="Newcontract" description="Newcontract page" />

      <h1>NewcontractPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/NewcontractPage/NewcontractPage.js</code>
      </p>
      <p>
        My default route is named <code>newcontract</code>, link to me with `
        <Link to={routes.newcontract()}>Newcontract</Link>`
      </p>
    </>
  )
}

export default NewcontractPage
