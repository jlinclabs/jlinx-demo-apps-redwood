import { useAuth } from '@redwoodjs/auth'
import { Set, Router, Route } from '@redwoodjs/router'

import DefaultLayout from 'src/layouts/DefaultLayout'
import MyLayout from 'src/layouts/MyLayout'

const Routes = () => {
  return (
    <Router {...{ useAuth }}>
      <Route path="/my-contract" page={MyContractPage} name="myContract" />
      <Set wrap={DefaultLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/logout" page={LogoutPage} name="logout" />
      </Set>
      <Set wrap={[DefaultLayout, MyLayout]} unauthenticated="home">
        <Route path="/my" page={MyPage} name="my" />
        <Route path="/my/identifiers" page={MyIdentifiersPage} name="myIdentifiers" />
        <Route path="/my/identifiers/new" page={MyNewIdentifierPage} name="myNewIdentifier" />
        <Route path="/my/identifiers/{did}" page={MyIdentifierPage} name="myIdentifier" />
        <Route path="/my/contracts" page={MyContractsPage} name="myContracts" />
        <Route path="/my/contracts/new" page={MyNewContractPage} name="myNewContract" />
        <Route path="/my/contracts/{id}" page={MyContractPage} name="myContract" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
