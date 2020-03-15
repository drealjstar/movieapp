import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <div className="ay" align="center">
        <table width="750px">
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
          <tr align="center">
            <td>Airplane</td>
            <td>Comedy</td>
            <td>5</td>
            <td>2</td>
            <button className="ca">Delete</button>
          </tr>
          <tr align="center">
            <td>Die Hard</td>
            <td>Action</td>
            <td>5</td>
            <td>2</td>
            <button className="cb">Delete</button>
          </tr>
          <tr align="center">
            <td>Genre Girl</td>
            <td>Thriller</td>
            <td>10</td>
            <td>2</td>
            <button className="cc">Delete</button>
          </tr>
          <tr align="center">
            <td>My new movie</td>
            <td>Action</td>
            <td>5</td>
            <td>2</td>
            <button className="cd">Delete</button>
          </tr>
          
        </table>
        
        </div>
        
    );
  }
}
