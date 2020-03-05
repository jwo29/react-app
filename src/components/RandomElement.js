import React, { useState, useCallback } from 'react';

const restaurant = [{name: 'a', main: 'aaa'}, {name: 'b', main: 'bbb'}, {name: 'c', main: 'ccc'}, {name: 'd', main: 'ddd'}, {name: 'e', main: 'eee'}];

const RandomElement = () => {
    // 초기값 설정
    const [count, setCount] = useState(0);
    let [arrayLength, setArrayLength] = useState(restaurant.length);
    let [index, setIndex] = useState(Math.floor(Math.random()*arrayLength));

    console.log(restaurant);
    console.log(arrayLength);
    console.log(index);

    const handleClick = () => {
        
        setCount(count + 1);
        restaurant.splice(index, 1);
        setArrayLength(arrayLength = restaurant.length);
        setIndex(index = Math.floor(Math.random()*arrayLength));
        
    };

    if(count < 3){
        return (
            <div>
                <h3>name: {restaurant[index].name}</h3>
                <h4>main: {restaurant[index].main}</h4>
                <button onClick={() => handleClick()}>Randomize</button>
            </div>
        );
    } else {
        return (
            <div>
                <h3>time over!</h3>
            </div>
        );
    }

}

export default RandomElement;