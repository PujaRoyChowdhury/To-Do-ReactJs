import React from "react"
// const TodoItem = ({ item, index }) => {
//     return (
//         <div className="todo-list">
//             <li>{item.todo}</li>
//         </div>
//     )
// }
const TodoItem = (props) => {
    return (
        <div className="todo-list">
            {/* <li>{props.index}</li> */}
            <li>{props.item.todo}</li>
            <div className="btns">
                <button onClick={()=>{props.deleteTodoItem(props.index)}}>Delete</button>
            </div>
        </div>
    )
}
export default TodoItem