import React, { useState } from 'react';

// class Example extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={() => this.state({ count: this.state.count + 1})}>
//                     Click me
//                 </button>
//             </div>
//         );
//     }
// }

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
            </div>
        )
    }
}

// props type 설정, 설정한 type과 전달된 type이 일치하지 않을때 콘솔에 오류 메세지 표시

// Content.propTypes = {
//     title: React.PropTypes.string,
//     body: React.PropTypes.string.isRequired // 필수 props
// };

export default Content;