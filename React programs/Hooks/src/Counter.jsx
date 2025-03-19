import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert("Negative values are not allowed!");
        }
    };

    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={increment}>Increment</button>
                <br />
               
                <button onClick={decrement}>Decrement</button>
            </div>
        </>
    );
}

export { Counter };
