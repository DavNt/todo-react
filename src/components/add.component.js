import React from "react";

export default function AddTodo(props){
  return(
    <>
    <form onSubmit={props.submit} className="">
      <div className="row justify-content-center m-3">
        <div className="col-7">
          <input
            type="text"
            className="form-control height put-center"
            placeholder="add data"
            onChange={(e)=>{
              // e.preventDefault();
              props.todochange(e.target.value);
            }}
          />
        </div>
        <div className="col-5">
          <input 
            type="submit"
            className="btn btn-primary height width"
            value="Add"
            // onClick={props.submit}
          />
            {/* Add
          </input> */}
        </div>
      </div>
    </form>
    
    </>
  )
}