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
            <div className="d-flex">
                <h1>{count}</h1>
                <button onClick={increment}>Increment</button>
                <br />
                <h2>Bhaskar</h2>
               
                <button onClick={decrement}>Decrement</button>
            </div>
        </>
    );
}

export { Counter };
