/** @jsxImportSource @emotion/react */
import {FormInput, Button} from 'components/lib'
import {useDispatch} from 'react-redux'
import {signupStart} from 'action'
import * as colors from 'styles/colors'

function SignUp() {
  const dispatch = useDispatch()
  async function handleSubmit(event) {
    event.preventDefault()
    const {email, password, confirmPassword} = event.target.elements

    if (password.value !== confirmPassword.value) {
      alert("Password don't match")
      return
    }

    dispatch(signupStart({email: email.value, password: password.value}))
  }

  return (
    <div
      css={{
        width: '23.75rem',
      }}
    >
      <h2>I do not have a account</h2>
      <p>Sign up with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput label={'Display Name'} name="displayName" id="signup-name" />
        <FormInput
          label={'Email'}
          name="email"
          autoComplete="current-email"
          id="signup-email"
          type="email"
        />
        <FormInput
          label={'Password'}
          autoComplete="new-password"
          name="password"
          id="signup-password"
          type="password"
        />
        <FormInput
          label={'Confirm Password'}
          name="confirmPassword"
          autoComplete="new-password"
          id="signup-confirm-password"
          type="password"
        />
        <Button
          variant="primary"
          css={{
            marginTop: '1rem',
            '&:hover': {
              background: colors.base,
              border: `solid 1px ${colors.text}`,
              color: colors.text,
            },
          }}
        >
          SIGNUP
        </Button>
      </form>
    </div>
  )
}

export {SignUp}
