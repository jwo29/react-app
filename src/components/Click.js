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

export default Click;