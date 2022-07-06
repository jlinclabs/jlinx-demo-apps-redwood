import { MetaTags } from '@redwoodjs/web'
import InspectObject from 'src/components/InspectObject'

const MyContractPage = (props) => {
  return (
    <>
      <MetaTags title="MyContract" description="MyContract page" />
      <InspectObject object={props}/>
    </>
  )
}

export default MyContractPage
