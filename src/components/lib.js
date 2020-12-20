/** @jsxImportSource @emotion/react */
import {keyframes} from '@emotion/react'
import styled from '@emotion/styled'
import * as colors from 'styles/colors'

const buttonVariant = {
  primary: {
    color: colors.base,
    background: colors.text,
  },
  secondary: {
    color: colors.text,
    background: colors.base,
  },
  google: {
    color: colors.base,
    background: colors.google,
  },
}

const Button = styled.button(
  {
    padding: '15px 25px',
    minWidth: '10rem',
    minHeight: '3.125rem',
    lineHeight: 1,
    border: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  ({variant = 'primary'}) => buttonVariant[variant],
)

const Input = styled.input({
  padding: '1em',
  paddingLeft: '0',
  border: 'none',
  color: `${colors.gray80}`,
  borderBottom: `solid 1px ${colors.grey}`,
  margin: '1rem 0',
  '&:focus': {
    outline: 'none',
  },
})

const spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})

const Spinner = styled.div({
  height: '50px',
  width: '50px',
  borderRadius: '50%',
  border: '3px solid rgba(195, 195, 195, 0.6)',
  borderTopColor: '#636767',
  animation: `${spin} 1s linear infinite`,
})

function FullPageSpinner() {
  return (
    <div
      css={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner />
    </div>
  )
}

function FormInput({label, name, id, ...props}) {
  return (
    <div
      className={`form-input-${name}`}
      css={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1em',
        position: 'relative',
        color: `${colors.gray80}`,
      }}
    >
      <Input
        {...props}
        name={name}
        id={id}
        placeholder=" "
        required
        css={{
          ':not(:placeholder-shown)': {
            [`~ label`]: {
              fontSize: '0.8rem',
              top: '3px',
            },
          },
          ':focus': {
            [`~ label`]: {
              top: '3px',
              fontSize: '0.8rem',
              transition: 'all 0.2s linear',
            },
          },
          ':valid': {
            [`~ label`]: {
              fontSize: '0.8rem',
              top: '3px',
            },
          },
          [`~ label`]: {
            pointerEvents: 'none',
            transition: 'all 0.2s linear',
          },
        }}
      />
      <label
        htmlFor={name}
        className={`label-${name}`}
        css={{
          position: 'absolute',
          top: '30px',
        }}
      >
        {label}
      </label>
    </div>
  )
}

export {Button, Input, FormInput, FullPageSpinner}
