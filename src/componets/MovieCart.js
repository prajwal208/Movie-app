import React from 'react'
import './moviecart.css'


function MovieCart({moviecart,color,removemovie}) {
    return (
        <>
            <div className="movie-cart">
            <h2 className="header">Your Liked Movies</h2>
                
                <div className="cart-list">
                    
                    {moviecart == '' ? <p>Empty Movie List</p> : 
                    
                    moviecart.map( ( movie, idx ) => (
                        <div className="box" key={ idx }>
                            <img src={ movie.Poster } alt='imageurl' />
                            <h4>{ movie.Title }
                            <span className="icon" onClick={() => removemovie(movie)}><i class="bi bi-heart-fill"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="32" fill={color} class="bi bi-heart-fill" viewBox="0 0 16 16">
                                     <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg></span></h4>
                                <div className="overlay">
                                    <h5>Click to remove from Like</h5>
                                </div>
                        </div>
                    ) ) }
                
                </div>
            </div>
        </>
    )
}

export default MovieCart
