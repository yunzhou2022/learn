import React, { useReducer } from "react";
import Demo from "./learn/ImperetiveHandle";
import useDemo from "./learn/debugValue";

export default function App() {
  const res = useDemo();
  console.log(res);
  
  return <Demo />;
}
