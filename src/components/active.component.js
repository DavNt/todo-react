import React from "react";

export default function ViewActive(props){
  return(
    <ul className="list-group row justify-content-center align-items-center">
      {props.todos.map((todo) =>(
        (!todo.progress) ? (
          <li key={todo.id} className="list-group-item col-9 d-flex">
            <div>
              <input
                type="checkbox" 
                checked={todo.progress}
                value={todo.progress}
                onChange={() =>(
                  props.updateTodo(todo.id)
                )}
              />
              <p>{todo.task}</p>
            </div>
          </li>
        ) : null
      ))}
    </ul>
  )
}