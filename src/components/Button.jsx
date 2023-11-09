import React from 'react'
import './Button.css'

export default function Button({action, text = 'Button', color = 'red', style = 'default'}) {
  return (
    <div className={color + ' ' + style} onClick={action}>{text}</div>
  )
}
