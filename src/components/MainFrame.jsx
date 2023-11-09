import React from 'react'
import Button from './Button'
import './Input.css'

export default function MainFrame({ text = 'Add task', action, value, handler }) {
    return (
        <>
            <div className='form'>
                <input onChange={handler} value={value} className='input' type="text" placeholder='Enter task' />
                <Button action={action} color='blue' text={text} />
            </div>
        </>
    )
}
