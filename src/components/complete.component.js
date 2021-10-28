import React from "react";
import Icdelete from '../resources/icons/ic_delete_forever_white.png';
import DeleteBtn from "./btndelete";

export default function ViewComplete(props){
  return(
    <>
    <ul className="list-group row justify-content-center align-items-center">
      {props.todos.map((todo) =>(
        (todo.progress) ? (
          <li key={todo.id} className="list-group-item col-9">
            <div className="item-chck-nam sp-btwn">
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
              <p className="mt-2 text-decoration-line-through">{todo.task}</p>
              </div>
              <div className="btn delbtn"
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
            </div>
          </li>
        ) : null
      ))}
    </ul>
    <DeleteBtn deleteall={props.deleteall}/>
    </>
  )
}