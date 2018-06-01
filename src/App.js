import React, { Component } from "react";
import People from "./components/People/People";
import PeopleDetail from "./components/People/PeopleDetail";
import {Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">    
        <section style ={{marginTop: '40px'}} >
        <Switch>
      <Route exact path='/' component={People}/>
      <Route exact path='/people/:peopleId/' component={PeopleDetail}/>
      </Switch>     
        </section>
      </div>
    );
  }
}

export default App;
