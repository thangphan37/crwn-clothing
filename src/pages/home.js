/** @jsxImportSource @emotion/react */
import {Directory} from 'components/directory'
import * as mq from 'styles/media-queries'

function HomePage() {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [mq.small]: {
          padding: '0.5rem 1rem',
        },
      }}
    >
      <Directory />
    </div>
  )
}

export {HomePage}
