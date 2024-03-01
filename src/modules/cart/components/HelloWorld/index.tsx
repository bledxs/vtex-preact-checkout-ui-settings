import { FunctionComponent, h } from 'preact'

import Slider from './components/Slider'
import useOrderForm from '@/utils/useOrderForm'

const HelloWorld: FunctionComponent = () => {
  const { orderForm, clientProfileData } = useOrderForm()
  const images = [
    'https://picsum.photos/id/237/1920/500',
    'https://picsum.photos/id/238/1920/500',
    'https://picsum.photos/id/239/1920/500',
    'https://picsum.photos/id/240/1920/500',
    'https://picsum.photos/id/241/1920/500',
    'https://picsum.photos/id/242/1920/500',
    'https://picsum.photos/id/243/1920/500',
  ]

  return (
    <div>
      <h1 className="title-preact-component">
        Hello, <b>{clientProfileData?.email}</b>, this is a component using Preact!
      </h1>

      <p>
        Total products in cart: <b>{orderForm?.items?.length}</b>
      </p>
      <span>
        <b>Slider component:</b>
      </span>
      <p>
        This component is using{' '}
        <strong
          style={{
            fontSize: '1.2em',
          }}
        >
          Preact
        </strong>{' '}
        and is being injected into the cart page. It has a slider with some images and it is being rendered using the
        useOrderForm hook to get the orderForm and clientProfileData.
      </p>
      <Slider images={images} />
    </div>
  )
}

export default HelloWorld
