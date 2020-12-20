/** @jsxImportSource @emotion/react */
import {useDispatch} from 'react-redux'
import {addCartItem, subtractCartItem, removeCartItem} from 'action'
import * as colors from 'styles/colors'

function CheckoutItem({cartItems}) {
  const dispatch = useDispatch()
  return (
    <div>
      {cartItems.map((item) => {
        const {id, imageUrl, price, quantity} = item
        return (
          <div
            key={id}
            css={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr) 0.35fr',
              borderBottom: `solid 1px ${colors.grey}`,
              padding: '1rem 0',
              alignItems: 'center',
              fontSize: '1.25rem',
            }}
          >
            <div css={{paddingRight: '1rem'}}>
              <img src={imageUrl} width="100%" alt="item-checkout" />
            </div>
            <div>Brown Cowboy</div>
            <div>
              <span
                onClick={() => dispatch(subtractCartItem(item))}
                css={{
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
              >
                &#10094;
              </span>
              <span
                css={{
                  marginLeft: '0.5rem',
                  marginRight: '0.5rem',
                }}
              >
                {quantity}
              </span>

              <span
                onClick={() => dispatch(addCartItem(item))}
                css={{
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
              >
                {' '}
                &#10095;
              </span>
            </div>
            <span>{price}</span>
            <span
              onClick={() => dispatch(removeCartItem(item))}
              css={{
                paddingLeft: '0.75rem',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              &#10005;
            </span>
          </div>
        )
      })}
    </div>
  )
}

export {CheckoutItem}
