import React from 'react';
import './App.css';
import './Component/Navbar.css';
import './Component/Itemlist.css';
import './Component/table.css';
import './Component/New.css';
import './Component/down.css';
import NavBar from './Component/Navbar';
import List from './Component/Itemlist';
import Table from './Component/table';
import NewMovies from './Component/New';
import DownButton from './Component/down';



class App extends React.Component {
  render (){
    return(
    <div className="App">
      <NavBar/><br /><br /><br /><br />
      <List/><br /><br />
      <NewMovies/>
      <Table/><br />
      <DownButton/>

    </div>
  
  );
  }
}

export default App;
