import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ContractsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.contracts()} className="rw-link">
            Contracts
          </Link>
        </h1>
        <Link to={routes.newContract()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Contract
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ContractsLayout
