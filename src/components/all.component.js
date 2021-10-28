import React from "react";
import AddTodo from "./add.component";

export default function ViewAll(props){
  return(
    <>
    <AddTodo
      todochange={props.todochange}
      progresschange={props.progresschange}
      submit={props.submit}
    />
    <ul className="list-group row justify-content-center align-items-center">
      {props.todos.map((todo) =>(
        <li key={todo.id} className="list-group-item col-9">
          <div className="item-chck-nam">
            <input
              type="checkbox" 
              className="item-checkbx"
              checked={todo.progress}
              value={todo.progress}
              onChange={() =>(
                props.updateTodo(todo.id)
              )}
            />
            <p className="mt-2">{todo.task}</p>
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}