/** @jsxImportSource @emotion/react */
import * as React from 'react'
import {CollectionOverview} from 'components/collection-overview'
import {CollectionPage} from 'components/collection'
import {Routes, Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {FullPageSpinner} from 'components/lib'
import {fetchShopDataStart} from 'action'

function WithShopPage(WrapedComponent) {
  function Component({isLoading}) {
    return isLoading ? <FullPageSpinner /> : <WrapedComponent />
  }

  return Component
}

const WithCollectionOverview = WithShopPage(CollectionOverview)
const WithCollectionPage = WithShopPage(CollectionPage)

function ShopPage() {
  const dispatch = useDispatch()
  const {isLoading} = useSelector((state) => state.shopReducer)

  React.useEffect(() => {
    console.log('I am in shopComponent')
    async function getData() {
      dispatch(fetchShopDataStart())
    }

    getData()
  }, [dispatch])

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<WithCollectionOverview isLoading={isLoading} />}
        />
        <Route
          path=":collectionId"
          element={<WithCollectionPage isLoading={isLoading} />}
        />
      </Routes>
    </div>
  )
}

export {ShopPage}
