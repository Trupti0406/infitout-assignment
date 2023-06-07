import React from "react";
import Navbar from "./components/Navbar";
import InfoTab from "./components/InfoTab";
import Table from "./components/Table";

const App = () => {
  return (
    <div style={{ backgroundColor: "#fbfbfb" }}>
      <Navbar />
      <InfoTab />
      <Table />
    </div>
  );
};

export default App;
