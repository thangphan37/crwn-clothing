/** @jsxImportSource @emotion/react */
import * as React from 'react'
import {MenuItem} from 'components/menu-item'
import {useSelector} from 'react-redux'

function Directory() {
  const {sections} = useSelector((state) => state.directoryReducer)
  return (
    <div
      css={{
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
      }}
    >
      {sections.map(({id, ...props}) => (
        <MenuItem key={id} {...props} />
      ))}
    </div>
  )
}

export {Directory}
