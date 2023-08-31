import React, { useState, useEffect } from "react";
import Message from "./Message";
import NewMessage from "./NewMessage";

function MessagesData({ filterValue }) {
  const [messages, setMessages] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/application/", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const handleInputChange = (event) => {
    const searchValue = event.target.value;
    let filteredMessages=messages.filter(
        (message) =>
          message.message.includes(searchValue) 
      );
      setMessages(filteredMessages)
    setSearchText(searchValue);
  };

  const filteredMessages = messages.filter(
    (message) =>
      message.message.includes(searchText) &&
      (filterValue === "" || message.kind === filterValue)
  );

  return (
    <div className="row">
      <form className="d-flex mb-2 mt-5" style={{ marginLeft: "400px" }}>
        <input
          className="form-control me-2 border-success"
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Search"
          aria-label="Search"
          style={{ width: "50%" }}
        />
      </form>
      <div className="mt-2 mx-5">
        {filteredMessages.map((message, ix) => (
          <Message key={ix} message={message} />
        ))}
      </div>
      <NewMessage/>
    </div>
  );
}

export default MessagesData;
