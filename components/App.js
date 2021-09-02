import React, { Component } from 'react'
import Nav from './Nav'
import Movies from './Movies'


class App extends Component {
  render(){
    return (
      <div>
        <Nav />
        <Movies />
      </div>
    )
  }
}

export default App;