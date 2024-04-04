import './Movies.css'
import React from "react";

const MoviesList = ({ data }) => {
    return (
   <div className="movie-list">
    <div className="table-content">
    <table>
        <thead>
            <tr>Title</tr>
            <tr>Genre</tr>
            <tr>Year</tr>
        </thead>
        <tbody>
            {
                data.map((movie,index) => {
                return (
                <tr key={index}>
                    <td className='title'>{movie.title}</td>
                    <td className='genre'>{movie.genre}</td>
                    <td className='year'>{movie.year}</td>
                </tr>
                )
                }
                )
            }
        </tbody>
    </table>
    </div>
   </div>
    )
}

export default MoviesList;