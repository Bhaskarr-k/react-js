import React from "react";

function App(){
  const li1=React.createElement("li",null,"course")
  const li2=React.createElement("li",null,"job")
  const ul=React.createElement("ul",null,li1,li2)
  return(ul)
}

export default App