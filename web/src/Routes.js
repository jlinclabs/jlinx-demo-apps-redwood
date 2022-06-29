// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import IdentitiesLayout from 'src/layouts/IdentitiesLayout'

import UsersLayout from 'src/layouts/UsersLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={IdentitiesLayout}>
        <Route path="/identities/new" page={IdentityNewIdentityPage} name="newIdentity" />
        <Route path="/identities/{id:Int}/edit" page={IdentityEditIdentityPage} name="editIdentity" />
        <Route path="/identities/{id:Int}" page={IdentityIdentityPage} name="identity" />
        <Route path="/identities" page={IdentityIdentitiesPage} name="identities" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
