/** @jsxImportSource @emotion/react */
import {ReactComponent as ShoppingBag} from 'assets/shopping-bag.svg'
import {useSelector} from 'react-redux'

function CartIcon({toggle}) {
  const {cartItems} = useSelector((state) => state.cartReducer)
  const count = cartItems.reduce((sum, item) => (sum += item.quantity), 0)
  return (
    <li
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'relative',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      onClick={toggle}
    >
      <ShoppingBag
        css={{
          width: '1.5rem',
          height: '1.5rem',
        }}
      />
      <span css={{position: 'absolute', fontSize: '0.7rem'}}>{count}</span>
    </li>
  )
}

export {CartIcon}
