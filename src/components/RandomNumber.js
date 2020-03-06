<<<<<<< HEAD
import React, { useState } from 'react';

function RandomNumber() {
    let [value, setValue] = useState(false);
    const [count, setCount] = useState(0);

    const incre = () => {
        setCount(count + 1);    
    };

    const update = () => {
        setValue(value = Math.round(Math.random()*100));
    }

    if(count < 3){
        return (
            <div>
                <h3>random number: {value}</h3>
                <button onClick={() => incre()} onUpdate={() => update()}>Randomize</button>
            </div>
        );
    } else {
        return (
            <div>
                <h3>time over!</h3>
                {/* <button onClick={() => incre()} onUpdate={() => update()}>Randomize</button> */}
            </div>
        );
    }
    
}

=======
import React, { useState } from 'react';

const restaurant = [{name: 'a', main: 'aaa'}, {name: 'b', main: 'bbb'}, {name: 'c', main: 'ccc'}, {name: 'd', main: 'ddd'}, {name: 'e', main: 'eee'}];

function RandomNumber() {
    let [value, setValue] = useState(false);
    const [count, setCount] = useState(0);

    const incre = () => {
        setCount(count + 1);    
    };

    const update = () => {
        setValue(value = Math.round(Math.random()*100));
    }

    if(count < 3){
        return (
            <div>
                <h3>random number: {value}</h3>
                <button onClick={() => incre()} onUpdate={() => update()}>Randomize</button>
            </div>
        );
    } else {
        return (
            <div>
                <h3>time over!</h3>
                {/* <button onClick={() => incre()} onUpdate={() => update()}>Randomize</button> */}
            </div>
        );
    }
    
}

>>>>>>> 1357576fa0947fd1aedede7e93ddb548a52705f6
export default RandomNumber;