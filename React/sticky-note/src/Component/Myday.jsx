import React, { useEffect, useState } from "react";
import Clock from "./Clock";
import { LuExternalLink } from "react-icons/lu";

export default function My_Day() {
  return (
    <>
      <div>
        <h1>My Day</h1>
        <LuExternalLink />
      </div>
      <Clock />
    </>
  );
}
