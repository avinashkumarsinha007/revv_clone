import React from "react";
import CarsDisplayCard from "../Components/ExploreCars/CarsDisplayCard";

export default function ExploreCars() {
  return (
    <div style={{ display: "flex", padding: "20px 100px" }}>
      <div
        style={{ display: "flex", flexBasis: "30%", border: "1px solid red" }}
      >
          
      </div>
      <div
        style={{
          display: "flex",
          padding: "20px",
          flexDirection: "column",
          flexBasis: "70%",
          border: "1px solid green",
        }}
      >
        <CarsDisplayCard />
        <br />
        <CarsDisplayCard />
      </div>
    </div>
  );
}
