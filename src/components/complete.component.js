import React from "react";
import Icdelete from '../resources/icons/ic_delete_forever_white.png';

export default function ViewComplete(props){
  return(
    <ul className="list-group row justify-content-center align-items-center">
      {props.todos.map((todo) =>(
        (todo.progress) ? (
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
            <div className="btn"
              onClick={() =>(
                props.delete(todo.id)
              )}
            >
              <img
                className="img-responsive "
                src={Icdelete}
                alt="Delete"
              />
            </div>
          </li>
        ) : null
      ))}
    </ul>
  )
}