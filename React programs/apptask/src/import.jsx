import React from "react";

function Import(){

    const li1=React.createElement("li",null,"React");
    const li2=React.createElement("li",null,"js");
    const ul=React.createElement("ul",null,li1,li2);
    return(ul)
}



function Import1(){
    return(
        <div>
            <h1>html</h1>
            <h1>css</h1>
        </div>
    )
}
export {Import,Import1}