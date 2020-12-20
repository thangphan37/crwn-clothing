/** @jsxImportSource @emotion/react */
import {Button, FormInput} from 'components/lib'
import {signInGoogleStart, signInEmailAndPasswordStart} from 'action'
import {useDispatch} from 'react-redux'
import * as colors from 'styles/colors'

function SignIn() {
  const dispatch = useDispatch()
  async function handleSubmit(event) {
    event.preventDefault()

    const {email, password} = event.target.elements
    dispatch(
      signInEmailAndPasswordStart({
        email: email.value,
        password: password.value,
      }),
    )
    // await auth.signInWithEmailAndPassword(email.value, password.value)
  }

  return (
    <div
      css={{
        width: '23.75rem',
      }}
    >
      <h2>I already have an account</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'email'}
          name="email"
          id="signin-email"
          autoComplete="current-email"
          type="email"
        />
        <FormInput
          label={'password'}
          autoComplete="current-password"
          name="password"
          id="signin-password"
          type="password"
        />
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, auto)',
            gridGap: '1em',
          }}
        >
          <Button
            variant="primary"
            type="submit"
            css={{
              marginTop: '1rem',
              '&:hover': {
                background: colors.base,
                border: `solid 1px ${colors.text}`,
                color: colors.text,
              },
            }}
          >
            SIGNIN
          </Button>
          <Button
            type="button"
            onClick={() => dispatch(signInGoogleStart())}
            variant="google"
            css={{
              marginTop: '1rem',
            }}
          >
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  )
}

export {SignIn}
