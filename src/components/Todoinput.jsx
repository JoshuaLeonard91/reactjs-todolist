import React, { useState } from 'react'

export default function Todoinput(props) {
    // button function to add new task
    const { handleAddTodos, todoValue, setTodoValue } = props

    // user input values



    return (
        <header>
            {/* targets event value */}
            <input value={todoValue} onChange={(event) => {
                setTodoValue(event.target.value)
            }} placeholder='Enter todo....' />

            {/* sends new todoValue to function and resets input */}
            <button onClick={() => {
                // function for adding new value
                handleAddTodos(todoValue)
                // resets input tag
                setTodoValue('')
            }
            }>Add</button>
        </header>
    )
}