/** @jsxImportSource @emotion/react */
import {ReactComponent as Logo} from 'assets/crown.svg'
import {Link} from 'react-router-dom'
import {CartIcon} from 'components/cart-icon'
import {CartDropDown} from 'components/cart-dropdown'
import {useSelector, useDispatch} from 'react-redux'
import {toggleCartDropDown, signoutStart} from 'action'
import * as colors from 'styles/colors'

function Header() {
  const {
    userReducer: {user},
    cartReducer: {hidden},
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <header
      css={{
        height: '5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '2rem',
        paddingRight: '0.5rem',
        position: 'relative',
      }}
    >
      <Link to="/..">
        <Logo />
      </Link>
      <nav>
        <ul
          css={{
            display: 'grid',
            // width: '18.75rem',
            alignItems: 'center',
            gridTemplateColumns: 'repeat(4, auto)',
            gridGap: '1.75em',
            listStyle: 'none',
            'li > a': {
              textDecoration: 'none',
              color: colors.text,
            },
          }}
        >
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <Link to="/shop">CONTACT</Link>
          </li>
          <li>
            {user ? (
              <div
                css={{
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
                onClick={() => dispatch(signoutStart())}
              >
                SIGN OUT
              </div>
            ) : (
              <Link to="/signin">SINGIN</Link>
            )}
          </li>
          <CartIcon toggle={() => dispatch(toggleCartDropDown())} />
        </ul>
      </nav>
      {hidden ? null : <CartDropDown />}
    </header>
  )
}

export {Header}
