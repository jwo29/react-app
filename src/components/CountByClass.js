import React from 'react';

// class component

class CountByClass extends React.Component {
    state = {
        count: 0
    };

    incre = () => {
        this.setState(state => {
            return {
                count: state.count+1
            };
        });
    };

    decre = () => {
        this.setState(state => {
            return {
                count: state.count-1
            };
        });
    };

    render() {
        const { count } = this.state;

        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => this.incre()}>Increment</button>
                <button onClick={() => this.decre()}>Decrement</button>
            </div>    
        );
    }
}

export default CountByClass;