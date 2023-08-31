import React, { useState } from "react";
function Menu({ setFilterValue }) {
    let [active,setActive]=useState('')
  const handleClick = (kind) => {
    setFilterValue(kind);
    setActive(kind)
  };

  return (
    <div className="col-sm-2 border bg-secondary-subtle" style={{ height: "100vh" }}>
      <div className="button-container">
        <ul style={{ listStyle: "none" }}>
          <li style={{ marginTop: "100%", marginLeft: "20%" }}>
            {active==="slack"?
            <button  class="bg-black text-white" style={{ border: "none" }} onClick={() => handleClick("slack")}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"  class="mx-2" style={{width:"20px",height:"20px"}}></img>
              Slack
            </button>:   <button style={{ border: "none" }} onClick={() => handleClick("slack")}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"  class="mx-2" style={{width:"20px",height:"20px"}}></img>
              Slack
            </button>
}
          </li>
          <li style={{ marginTop: "25%", marginLeft: "20%" }}>
            {active==="gmail"?
            <button class="bg-black text-white" style={{ border: "none" }} onClick={() => handleClick("gmail")}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Gmail_Icon_%282013-2020%29.svg"  class="mx-2" style={{width:"20px",height:"20px"}}></img>
              Gmail
            </button>:<button style={{ border: "none" }} onClick={() => handleClick("gmail")}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Gmail_Icon_%282013-2020%29.svg"  class="mx-2" style={{width:"20px",height:"20px"}}></img>
              Gmail
            </button>
}
          </li>
          <li style={{ marginTop: "25%", marginLeft: "20%" }}>
            {active==="notion"?
            <button class="bg-black text-white" style={{ border: "none" }} onClick={() => handleClick("notion")}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg"  class="mx-2" style={{width:"20px",height:"20px"}}></img>
              Notion
            </button>: <button style={{ border: "none" }} onClick={() => handleClick("notion")}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg"  class="mx-2" style={{width:"20px",height:"20px"}}></img>
              Notion
            </button>
}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
