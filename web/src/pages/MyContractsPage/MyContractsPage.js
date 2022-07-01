import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MyContractsPage = () => {
  return (
    <>
      <MetaTags title="MyContracts" description="MyContracts page" />

      <h1>MyContractsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/MyContractsPage/MyContractsPage.js</code>
      </p>
      <p>
        My default route is named <code>myContracts</code>, link to me with `
        <Link to={routes.myContracts()}>MyContracts</Link>`
      </p>
    </>
  )
}

export default MyContractsPage
