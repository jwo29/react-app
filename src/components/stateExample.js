<<<<<<< HEAD
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

=======
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

>>>>>>> 1357576fa0947fd1aedede7e93ddb548a52705f6
export default StateExample;