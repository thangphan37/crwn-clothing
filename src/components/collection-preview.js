/** @jsxImportSource @emotion/react */
import {CollectionItem} from 'components/collection-item'

function CollectionPreview({title, items}) {
  return (
    <div css={{display: 'flex', flexDirection: 'column'}}>
      <h2 css={{fontSize: '1.75rem', textAlign: 'center'}}>
        {title?.toUpperCase()}
      </h2>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: '4em',
        }}
      >
        {items?.map((collectionItem) => {
          const id = `${title}-${collectionItem.id}`
          return <CollectionItem key={id} item={{...collectionItem, id}} />
        })}
      </div>
    </div>
  )
}

export {CollectionPreview}
