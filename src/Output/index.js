import React from 'react'
import marked from 'marked'
import highlight from 'highlight.js'
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return highlight.highlightAuto(code).value
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  langPrefix: 'language-',
  xhtml: false
})

export default function Output(props) {
  return (
    <div
      id="preview"
      className="preview"
      dangerouslySetInnerHTML={{ __html: marked(props.output) }}
    />
  )
}
