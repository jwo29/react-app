import React from 'react';

class StateExample extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            message: 'hello'
        };
    }

    handlerOnChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input type="text" name="message" onChange={this.handlerOnChange}/>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

export default StateExample;