/** @jsxImportSource @emotion/react */
import {Link} from 'react-router-dom'
import * as mq from 'styles/media-queries'

function MenuItem({title, imageUrl, size}) {
  return (
    <Link
      to={`/shop/${title}`}
      css={{
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '30%',
        minHeight: `${size ? '23.75rem' : '15rem'}`,
        margin: '0.5rem',
        color: '#000000',
        overflow: 'hidden',
        '&:hover': {
          '> div': {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            opacity: 0.9,
            transition: '3s',
            transitionTimingFunction: 'cubic-bezier(.14,.25,.59,.35)',
          },
        },
        [mq.small]: {
          minWidth: '100%',
        },
      }}
    >
      <div
        css={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
        }}
      />
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          background: '#ffffff',
          opacity: 0.7,
          padding: '0 2rem',
          height: '5.625rem',
        }}
      >
        <h2
          css={{
            margin: '0',
            fontSize: '1.375em',
            color: '#4a4a4a',
          }}
        >
          {title.toUpperCase()}
        </h2>
        <span
          css={{
            fontSize: '1rem',
            fontWeight: 'lighter',
          }}
        >
          SHOP NOW
        </span>
      </div>
    </Link>
  )
}

export {MenuItem}
