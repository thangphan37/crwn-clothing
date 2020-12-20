/** @jsxImportSource @emotion/react */

import {CheckoutItem} from 'components/checkout-item'
import {useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import * as colors from 'styles/colors'

function CheckoutPage() {
  const publishableKey =
    'pk_test_51HxifWDC9RP3CV0BhYlt8qIpRkdcyZaMVbM8O5tnWXp2EEsymkhY6wdgE801oANFwsfbGhhGXJSCrknad8NGfcls002g15tOvs'

  const {cartItems} = useSelector((state) => state.cartReducer)
  const total = cartItems.reduce(
    (sum, item) => (sum += item.price * item.quantity),
    0,
  )

  function onToken(token) {
    alert('Successfull payment!')
  }
  return (
    <div
      css={{
        width: '840px',
        margin: '0 auto',
        paddingTop: '2rem',
      }}
    >
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr) 0.35fr',
          borderBottom: `solid 1px ${colors.grey}`,
          paddingBottom: '1rem',
        }}
      >
        <div>Product</div>
        <div>Description</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Remove</div>
      </div>
      <CheckoutItem cartItems={cartItems} />
      <div
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <span
          css={{
            fontSize: '2rem',
            margin: '1.5rem 0',
          }}
        >
          TOTAL: ${`${total}`}
        </span>
      </div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: colors.red,
        }}
      >
        <p>*Please use the following test credit card for payments*</p>
        <span>4242424242424242 - Exp: Any future date - CVC: Any 3 digits</span>
      </div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '2rem 0',
        }}
      >
        <StripeCheckout
          panelLabel="Pay Now"
          name="CRWN Clothing Ltd."
          description={`Your total is $${total}`}
          image="https://svgshare.com/i/CUz.svg"
          amount={total * 100}
          token={onToken}
          stripeKey={publishableKey}
          shippingAddress
          billingAddress
        />
      </div>
    </div>
  )
}

export {CheckoutPage}
