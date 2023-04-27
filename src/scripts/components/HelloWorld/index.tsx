import { h, FunctionComponent } from 'preact'
import useOrderForm from '../../../utils/useOrderForm'

const HelloWorld: FunctionComponent = () => {
  const { orderForm, clientProfileData } = useOrderForm()
  return (
    <div>
      <h1 className="title-preact-component">
        Hello, <b>{clientProfileData?.email}</b>, this is a component using Preact!
      </h1>

      <p>
        Total products in cart: <b>{orderForm?.items?.length}</b>
      </p>
    </div>
  )
}

export default HelloWorld
