import React, { useState } from "react";

const TodoInput = ({createTodoItem}) => {
    const [value, setValue] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (value === "") {
            return console.log("Please add something to-do")
        }
        createTodoItem(value)
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Create todo'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button>Create</button>
        </form>
    )
}

export default TodoInput;