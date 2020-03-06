<<<<<<< HEAD
import React, { useState } from 'react';

function CountByHook() {
    const [count, setCount] = useState(0); // useState(false); 와 동일한 문장

    const incre = () => {
        setCount(count + 1);
    };

    const decre = () => {
        setCount(count -1);
    };

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => incre()}>Increment</button>
            <button onClick={() => decre()}>Decrement</button>
        </div>
    );
}

=======
import React, { useState } from 'react';

function CountByHook() {
    const [count, setCount] = useState(0); // useState(false); 와 동일한 문장

    const incre = () => {
        setCount(count + 1);
    };

    const decre = () => {
        setCount(count -1);
    };

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => incre()}>Increment</button>
            <button onClick={() => decre()}>Decrement</button>
        </div>
    );
}

>>>>>>> 1357576fa0947fd1aedede7e93ddb548a52705f6
export default CountByHook;