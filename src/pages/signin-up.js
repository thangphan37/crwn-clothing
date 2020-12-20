/** @jsxImportSource @emotion/react */
import {SignIn} from 'components/signin'
import {SignUp} from 'components/signup'

function SignInUpPage() {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        width: '840px',
      }}
    >
      <SignIn />
      <SignUp />
    </div>
  )
}

export {SignInUpPage}
