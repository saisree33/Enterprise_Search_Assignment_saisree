import React, { useRef, useState } from 'react';
import styles from "../App.module.css";
const NewMessage = () => {
    const [message,setMessage]=useState("")
    const [kind,setKind]=useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
       
     
        const messageData = {
        kind: kind,
            message: message,
            "created_on": "2023-08-30T14:34:58.353367Z",
            "updated_on": "2023-08-30T14:34:58.353783Z"
    
        };
    
        try {
          const response = await fetch("http://localhost:8000/application/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(messageData),
          });
    
          if (!response.ok) {
           
            throw new Error("Failed to add message");
          }
        } catch (error) {
          console.error(error);
        }
      };
  const reset = () => {
   setMessage(" ")
   setKind(" ")
  };

  return (
    <div className="container mt-4" >
          <button  data-bs-toggle="modal" className={styles.addNewButtonHome+" btn btn-secondary rounded-pill"} data-bs-target="#messageModal">+</button>
      <div
     
        className="modal fade"
        id="messageModal"
        tabIndex="-2"
        aria-labelledby="messageModalLabel"
        aria-hidden="true"
        
        
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="messageModalLabel" style={{color:"black"}}>
                Type a Message...
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label htmlFor="messageName" className="form-label" style={{color:"black"}}>
                    Message:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="messageName"
                    name="messageName"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label" style={{color:"black"}}>
                    App:
                  </label>
                  <div class="dropdown">
  <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    select app
  </button>
  <ul class="dropdown-menu">
    <li><button type="button" id="slack" class="dropdown-item btn btn-light" onClick={()=>setKind("slack")} > <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"  class="mx-2" style={{width:"20px",height:"20px"}}></img> slack</button></li>
    <li><button type="button" class="dropdown-item btn btn-light" id="gmail" onClick={()=>setKind("gmail")}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Gmail_Icon_%282013-2020%29.svg"  class="mx-2" style={{width:"20px",height:"20px"}}></img>
        gmail</button></li>
    <li><button type="button" class="dropdown-item btn btn-light" id="notion" onClick={()=>setKind("notion")}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg"  class="mx-2" style={{width:"20px",height:"20px"}}></img>
        notion</button></li>
  </ul>
</div>
                </div>
                <button type="button"  className="btn btn-dark opacity-75" onClick={(e)=>handleSubmit(e)}>
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMessage;
