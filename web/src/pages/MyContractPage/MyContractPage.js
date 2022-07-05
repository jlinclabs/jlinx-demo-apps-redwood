import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MyContractPage = () => {
  return (
    <>
      <MetaTags title="MyContract" description="MyContract page" />

      <h1>MyContractPage</h1>
      <p>
        Find me in <code>./web/src/pages/MyContractPage/MyContractPage.js</code>
      </p>
      <p>
        My default route is named <code>myContract</code>, link to me with `
        <Link to={routes.myContract()}>MyContract</Link>`
      </p>
    </>
  )
}

export default MyContractPage
