import React, {Component} from 'react';



export default class List extends Component{
    render(){
        return(
            <div>
          <ul className='bc'>
         <li>All Games</li>
         <li>Action</li>
         <li>Comedy</li>
         <li>Romance</li>
         <li>Thriller</li>
         </ul>

        </div>
        )
    }
}