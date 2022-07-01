import { useAuth } from '@redwoodjs/auth'
import { Set, Router, Route } from '@redwoodjs/router'

import IdentifiersLayout from 'src/layouts/IdentifiersLayout'
import DefaultLayout from 'src/layouts/DefaultLayout'
import MyLayout from 'src/layouts/MyLayout'
// import UsersLayout from 'src/layouts/UsersLayout'

const Routes = () => {
  return (
    <Router {...{ useAuth }}>
      <Set wrap={DefaultLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/logout" page={LogoutPage} name="logout" />
      </Set>
      <Set wrap={[DefaultLayout, MyLayout]} unauthenticated="home">
        <Route path="/my" page={MyPage} name="my" />
        <Route path="/my/identifiers" page={MyIdentifiersPage} name="myIdentifiers" />
        <Route path="/my/identifiers/new" page={NewIdentifierPage} name="newIdentifier" />
        <Route path="/my/contracts" page={MyContractsPage} name="myContracts" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
