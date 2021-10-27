import React from "react";

export default function AddTodo(props){
  return(
    <>
    <form onSubmit={props.submit}>
      <div className="row m-3 justify-content-center">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="add data"
            onChange={(e)=>{
              e.preventDefault();
              props.todochange(e.target.value);
            }}
          />
        </div>
        <div className="col-3">
          <button 
            type="submit"
            className="btn btn-primary"
            // onClick={props.submit()}
          >
            Add
          </button>
        </div>
      </div>
    </form>
    
    </>
  )
}