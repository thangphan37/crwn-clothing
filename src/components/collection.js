import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {CollectionPreview} from 'components/collection-preview'

function CollectionPage() {
  const {collections} = useSelector((state) => state.shopReducer)
  const match = useParams('hats')
  const collectionFinded = collections[match.collectionId]
  return (
    <div>
      <CollectionPreview
        items={collectionFinded?.items}
        title={collectionFinded?.title}
      />
    </div>
  )
}

export {CollectionPage}
