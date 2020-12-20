import {actionTypes} from 'action-types'

const initialState = {
  hidden: true,
  cartItems: [],
}

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_DROP_DOWN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case actionTypes.ADD_CART_ITEM: {
      const itemExisted = state.cartItems.find(
        (cart) => cart.id === action.payload.id,
      )

      if (itemExisted) {
        return {
          ...state,
          cartItems: state.cartItems.map((cart) =>
            cart.id === itemExisted.id
              ? {...cart, quantity: cart.quantity + 1}
              : cart,
          ),
        }
      }

      return {
        ...state,
        cartItems: [...state.cartItems, {...action.payload, quantity: 1}],
      }
    }
    case actionTypes.SUBTRACT_CART_ITEM: {
      const itemExisted = state.cartItems.find(
        (cart) => cart.id === action.payload.id,
      )

      if (itemExisted && itemExisted.quantity - 1) {
        return {
          ...state,
          cartItems: state.cartItems.map((cart) =>
            cart.id === itemExisted.id
              ? {...cart, quantity: cart.quantity - 1}
              : cart,
          ),
        }
      }

      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cart) => cart.id !== action.payload.id,
        ),
      }
    }
    case actionTypes.REMOVE_CART_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cart) => cart.id !== action.payload.id,
        ),
      }
    }
    case actionTypes.CLEAR_CART: {
      return {
        ...state,
        cartItems: [],
      }
    }
    default:
      return state
  }
}

export {cartReducer}
