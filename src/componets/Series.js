import React from 'react'
import './style.css'
import {Link} from "react-router-dom";



function Series({movies,color}) {
   
    return (
        <>
       
       <div className="container">
                <div className="content">
                   <div className="header-main">
                        <div className="header-bar">
                            <div className="search-bar">
                                <input type="text" name="name" placeholder="search..."  
                                />
                            </div>

                            <Link to="/Movie-app" style={{color:"white",textDecoration:"none"}}>
                            <h3>Movies</h3>
                            </Link>

                           <h3>TV Series</h3>
                           
                           <div className="userimg">
                               <img src='data:image/png;base64,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'alt='imageurl' id='img2'/>
                           </div>
                        
                        </div>
                        <div className="section">
                        <img src='https://qph.fs.quoracdn.net/main-qimg-9fdb2a0245b2942b652e8504989529f0'alt='imageurl' id='img1'/>
                       </div>

                        <div className="Movielist">
                            <h2>Movies</h2>
                            <div className="box-grid">
                            {movies.map((movie,idx) => (
                               <div className="box" key={idx}>
                                <img src={movie.Poster} alt='imageurl'/>
                                <h4>{movie.Title} 
                                <span className="icon"><i class="bi bi-heart-fill"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="32" fill={color} class="bi bi-heart-fill" viewBox="0 0 16 16">
                                     <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg></span></h4>
                                </div>
                              
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Series
