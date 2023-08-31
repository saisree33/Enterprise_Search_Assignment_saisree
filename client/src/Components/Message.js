import React from "react";
import ViewMessage from "./ViewMessage";

function Message({ message }) {
  return (
    <div>
      <div className="card mt-3 shadow-lg">
        <div className="card-header">
          {message.kind === "slack" ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
              class="mx-2"
              style={{ width: "20px", height: "20px" }}
              alt="Slack"
            />
          ) : message.kind === "gmail" ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Gmail_Icon_%282013-2020%29.svg"
              class="mx-2"
              style={{ width: "20px", height: "20px" }}
              alt="Gmail"
            />
          ) : (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg"
              class="mx-2"
              style={{ width: "20px", height: "20px" }}
              alt="Notion"
            />
          )}
          {message.kind === "slack" ? "Slack" : message.kind === "gmail" ? "Gmail" : "Notion"}
        </div>
        <div className="card-body">
          <h5 className="card-title">{message.message.slice(0, 20)}...</h5>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal-${message.id}`} // Using a unique ID for each modal
          >
            Open Message
          </button>
        </div>
      </div>

      {/* Modal Code */}
      <div
        className="modal fade"
        id={`exampleModal-${message.id}`}
        tabIndex="-1"
        aria-labelledby={`exampleModalLabel-${message.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`exampleModalLabel-${message.id}`}>
              {message.kind === "slack" ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
              class="mx-2"
              style={{ width: "20px", height: "20px" }}
              alt="Slack"
            />
          ) : message.kind === "gmail" ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Gmail_Icon_%282013-2020%29.svg"
              class="mx-2"
              style={{ width: "20px", height: "20px" }}
              alt="Gmail"
            />
          ) : (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg"
              class="mx-2"
              style={{ width: "20px", height: "20px" }}
              alt="Notion"
            />
          )}
                {message.kind}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{message.message}</p>
            </div>
            <div className="modal-footer">
                <div class="row">
              <div class="text-success" style={{marginLeft:"300px"}}>
                {message.created_on.slice(0,10).split("").reverse().join("").replace("-","/")+message.created_on.slice(12,16)+" pm" 
}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
