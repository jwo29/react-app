<<<<<<< HEAD
import React from 'react';


class Click extends React.Component {
    handleOnClick = () => {
        console.log('clicked');
    }

    render(){
        return (
            <div>
                <button onClick={this.handleOnClick}>click</button>
            </div>
        );
    }
}

=======
import React from 'react';


class Click extends React.Component {
    handleOnClick = () => {
        console.log('clicked');
    }

    render(){
        return (
            <div>
                <button onClick={this.handleOnClick}>click</button>
            </div>
        );
    }
}

>>>>>>> 1357576fa0947fd1aedede7e93ddb548a52705f6
export default Click;