/** @jsxImportSource @emotion/react */
import {Button} from 'components/lib'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toggleCartDropDown} from 'action'
import * as colors from 'styles/colors'

function CartDropDown() {
  const {cartItems} = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log('cartItems', cartItems)
  return (
    <div
      css={{
        height: '19.75rem',
        width: '15rem',
        position: 'absolute',
        top: '4.5rem',
        border: `solid 1px ${colors.text}`,
        background: colors.base,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem 0',
        right: 0,
        zIndex: 99,
      }}
    >
      <div
        css={{
          height: '90%',
          width: '85%',
          marginBottom: '1rem',
          overflow: 'auto',
        }}
      >
        {!cartItems.length ? (
          <div
            css={{
              textAlign: 'center',
              marginTop: '2.5rem',
              fontSize: '1.15rem',
            }}
          >
            Your cart is empty
          </div>
        ) : (
          cartItems.map(({id, imageUrl, name, price, quantity}) => (
            <div
              css={{
                display: 'grid',
                gridTemplateColumns: '30% 1fr',
                gridGap: '1rem',
                height: '5rem',
                marginBottom: '1rem',
                alignItems: 'center',
              }}
              key={`cart-item-${id}`}
            >
              <div
                css={{
                  backgroundImage: `url(${imageUrl})`,
                  height: '100%',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
              <div>
                <div>{name}</div>
                <span>
                  {quantity} x ${price}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      <Button
        variant="primary"
        onClick={() => {
          navigate('checkout')
          dispatch(toggleCartDropDown())
        }}
        css={{
          width: '85%',
          border: `solid 1px ${colors.text}`,
          '&:hover': {
            opacity: 0.9,
            background: colors.base,
            color: colors.text,
          },
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  )
}

export {CartDropDown}
