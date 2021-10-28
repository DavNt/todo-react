import React from "react";

export default function DeleteBtn(props){
  return(
    <div className="row justify-content-end">
      <div className="col-5 m-2 align-self-end">
        <button
          type="button"
          className="btn btn-danger"
          onClick={props.deleteall}
        >
          Delete All
        </button>
      </div>
    </div>
  )
}