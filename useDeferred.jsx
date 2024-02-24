"use client";
import React, { useState } from "react";
import DefRender from "./DefRender";

const UseDef = () => {
  const [namev, setnamev] = useState("");
  return (
    <div>
      <input
        type="text"
        value={namev}
        placeholder="enter name"
        onChange={(e) => setnamev(e.target.value)}
      />

      <DefRender namev={namev} />
    </div>
  );
};

export default UseDef;
