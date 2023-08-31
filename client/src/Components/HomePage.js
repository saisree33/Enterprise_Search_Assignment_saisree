import React, { useState } from "react";
import Menu from "./Menu";
import MessagesData from "./MessagesData";
import Nav from "./Nav";

function HomePage() {
  const [filterValue, setFilterValue] = useState('');

  return (
    <>
      <Nav />
      <div className="row">
        <Menu setFilterValue={setFilterValue} />
        <div className="col-sm-9">
          <MessagesData filterValue={filterValue} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
