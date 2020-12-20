/** @jsxImportSource @emotion/react */
import {Button} from 'components/lib'
import {useDispatch} from 'react-redux'
import {addCartItem} from 'action'
import * as colors from 'styles/colors'

function CollectionItem({item}) {
  const dispatch = useDispatch()
  const {imageUrl, name, price} = item
  return (
    <div
      css={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '21.875rem',
        flex: '1',
        '&:hover': {
          '> div': {
            opacity: 0.7,
          },
          '> button': {
            display: 'block',
          },
        },
        '> button': {
          display: 'none',
        },
      }}
    >
      <div
        css={{
          backgroundImage: `url(${imageUrl})`,
          width: '100%',
          height: '95%',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div
        css={{
          height: '5%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '0.5em',
          paddingRight: '1.5em',
          color: colors.text,
        }}
      >
        <p>{name}</p>
        <span>{price}</span>
      </div>
      <Button
        variant="secondary"
        css={{
          position: 'absolute',
          bottom: '3.5em',
          width: '80%',
          left: '10%',
          right: '10%',
          opacity: 0.7,
          border: `solid 1px ${colors.text}`,
          '&:hover': {
            opacity: 0.9,
            background: colors.text,
            color: colors.base,
          },
        }}
        onClick={() => dispatch(addCartItem(item))}
      >
        ADD TO CART
      </Button>
    </div>
  )
}

export {CollectionItem}
