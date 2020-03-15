import React, { Component } from 'react';


 export default class NewMovies extends Component{
    render(){
        return(
       <div className='aj'> 
      <button>New Movies</button><br />
      <p>Showing 14 movies in the database </p>
      <input type= 'text' placeholder ='Search' className='search' /><br /><br />


      </div>

     );
    }
}