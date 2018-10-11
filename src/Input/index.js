import React from 'react'

export default function Input(props) {
  return (
    <div>
      <textarea id="editor" value={props.text} onChange={props.handleChange} />
    </div>
  )
}
