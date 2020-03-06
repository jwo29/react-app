import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h1>This is Home</h1>
        <Link to="/judge">
            <Button renderAs="button">
                <span>Click me!</span>
            </Button>
        </Link>
    </div>
);

export default Home;