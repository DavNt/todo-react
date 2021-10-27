import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header(){
  const [isAllActive, setIsAllActive] = useState(false);
  const [isActiveActive, setIsActiveActive] = useState(false);
  const [isCompleteActive, setIsCompleteActive] = useState(false);

  useEffect(() =>{
    setIsAllActive(true);
  }, []);

  function btnClick(s){
    if(s === "all"){
      setIsAllActive(true);
      setIsActiveActive(false);
      setIsCompleteActive(false);
    }else if (s === "active") {
      setIsAllActive(false);
      setIsActiveActive(true);
      setIsCompleteActive(false);
    } else {
      setIsAllActive(false);
      setIsActiveActive(false);
      setIsCompleteActive(true);
    }
  }

  return(
    <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-9">
          <h1 className="text-center">#todo</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3 text-center">
          <Link
            className={`head-btn ${isAllActive?"head-btn-active":""}`}
            onClick={() =>(
              btnClick("all")
            )}
            to={"/"}
          >
            All
          </Link>
        </div>
        <div className="col-3 text-center">
          <Link
            className={`head-btn ${isActiveActive?"head-btn-active":""}`}
            onClick={() =>(
              btnClick("active")
            )}
            to={"/active"}
          >
            Active
          </Link>
        </div>
        <div className="col-3 text-center">
          <Link
            className={`head-btn ${isCompleteActive?"head-btn-active":""}`}
            onClick={() =>(
              btnClick("complete")
            )}
            to={"/completed"}
          >
            Completed
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10 hr-mt">
          <hr/>
        </div>
      </div>
    </div>
    </>
  )
}