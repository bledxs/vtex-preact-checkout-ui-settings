import { useState, useEffect } from 'preact/hooks'

declare global {
  interface Window {
    API: {
      orderForm: OrderForm
    }
  }
}

function useOrderForm() {
  const initialOrderForm = window?.API?.orderForm

  const [loading, setLoading] = useState(false)
  const [orderForm, setOrderForm] = useState(initialOrderForm)
  const [shippingData, setShippingData] = useState(initialOrderForm?.shippingData)
  const [clientProfileData, setClientProfileData] = useState(initialOrderForm?.clientProfileData)

  const orderFormUpdated = (_, orderForm) => {
    setOrderForm(orderForm)
    setShippingData(orderForm?.shippingData)
    setClientProfileData(orderForm?.clientProfileData)
  }

  const checkoutRequestBegin = () => {
    setLoading(true)
  }

  const checkoutRequestEnd = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    $(window).on('orderFormUpdated.vtex', orderFormUpdated)
    $(window).on('checkoutRequestBegin.vtex', checkoutRequestBegin)
    $(window).on('checkoutRequestEnd.vtex', checkoutRequestEnd)

    return () => {
      $(window).off('orderFormUpdated.vtex', orderFormUpdated)

      $(window).off('checkoutRequestBegin.vtex', checkoutRequestBegin)

      $(window).off('checkoutRequestEnd.vtex', checkoutRequestEnd)
    }
  }, [])

  return { loading, orderForm, shippingData, clientProfileData }
}
export default useOrderForm
