import React from 'react';
import './Movie.css';

class Movie extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div className="MovieInfo">
                <MoviePoster poster={this.props.poster}/>
                <div className="MovieDescription">
                    <h1 className="MovieTitle">{this.props.title}</h1>
                </div>
                
                
            </div>
            
        );  
    }
}

class MoviePoster extends React.Component {
    render() {
        return (
            <img src={this.props.poster}/>           
        );
    }
}

export default Movie;