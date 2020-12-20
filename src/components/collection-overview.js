import {useSelector} from 'react-redux'
import {CollectionPreview} from 'components/collection-preview'

function CollectionOverview(params) {
  const {collections} = useSelector((state) => state.shopReducer)
  const collectionsList = Object.keys(collections).map(
    (collect) => collections[collect],
  )
  return (
    <>
      {collectionsList.map(({id, items, ...collectionProps}) => (
        <CollectionPreview
          key={id}
          items={items.filter((item, index) => index < 4)}
          {...collectionProps}
        />
      ))}
    </>
  )
}

export {CollectionOverview}
