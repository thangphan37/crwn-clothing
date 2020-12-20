/** @jsxImportSource @emotion/react */
import * as React from 'react'
import {HomePage} from 'pages/home'
import {ShopPage} from 'pages/shop'
import {SignInUpPage} from 'pages/signin-up'
import {CheckoutPage} from 'pages/checkout'
import {Header} from 'components/header'
// import {FullPageSpinner} from 'components/lib'
import {Route, Routes, Navigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {checkSessionUser} from 'action'

function App() {
  const {user} = useSelector((state) => state.userReducer)
  // const [status, setStatus] = React.useState('idle')
  const dispatch = useDispatch()

  React.useEffect(() => {
    console.log('I am in appComponent')
    dispatch(checkSessionUser())
  }, [dispatch])

  // if (status === 'loading' || status === 'idle') {
  //   return <FullPageSpinner />
  // }

  return (
    <div
      css={{
        height: '100vh',
        fontFamily: 'Open Sans Condensed',
        padding: '.5rem 2.5rem',
      }}
    >
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/signin"
            children={user ? <Navigate to="/" /> : <SignInUpPage />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
