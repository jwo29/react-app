import React from 'react';

class RandomNumber extends React.Component {
    updateNumber() {
        let value = Math.round(Math.random()*100);
        this.props.onUpdate(value);

        this.setState = {
            count: this.state.count++
        }

        console.log(this.state.count);
    }

    constructor(props){
        super(props);
        this.updateNumber = this.updateNumber.bind(this);
        this.state = {
            count: 0
        };
    }

    render(){
        if(this.state.count < 3){
            return (
                <div>
                    <h1>RANDOM NUMBER: {this.props.number}</h1>
                    <button className="result_button" onClick={this.updateNumber}>{this.props.title}</button>

                </div>
            );
        } else {
            return (
                <div>
                    <h1>Time Over!</h1>
                </div>
            );
        }
    }
}
export default RandomNumber;