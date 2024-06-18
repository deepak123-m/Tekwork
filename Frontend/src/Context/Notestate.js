import NoteContext from "./Notecontext";

import { useState } from "react";

const Notestate = (props) => {
  const taskInitial = [];
  const [taskall, setTaskAll] = useState(taskInitial);
  const host = "http://localhost:5000";


  const createTask = async (task) => {
    const response = await fetch(`${host}/task/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({task}),
    });
    const json = await response.json();
    console.log("hookresponse")
    console.log(json)
    return json;
  };


  const allTask = async () => {
    const response = await fetch(`${host}/task/getall`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      
    });
    const json = await response.json();

    setTaskAll(json)
    console.log("hookresponse")
    console.log(json)
    return json;
  };


  return (
    <NoteContext.Provider
      value={{
   createTask,allTask,taskall
      }}
    >
      {props.children} {/*children components passing props*/}
    </NoteContext.Provider>
  );
};

export default Notestate;
