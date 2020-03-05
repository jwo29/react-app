import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
        <h1>{this.props.title}</h1>
        );
    }
}


// const Home = () => (
//     <div>
//         <h1>This is Home</h1>
//         <Link to="/judge">
//             <Button onClick={this.routeChange}>
//                 <span>Click me!</span>
//             </Button>
//         </Link>
//     </div>
// );

export default Header;