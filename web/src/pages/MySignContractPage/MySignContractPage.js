import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MySignContractPage = () => {
  return (
    <>
      <MetaTags title="MySignContract" description="MySignContract page" />

      <h1>MySignContractPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/MySignContractPage/MySignContractPage.js</code>
      </p>
      <p>
        My default route is named <code>mySignContract</code>, link to me with `
        <Link to={routes.mySignContract()}>MySignContract</Link>`
      </p>
    </>
  )
}

export default MySignContractPage
