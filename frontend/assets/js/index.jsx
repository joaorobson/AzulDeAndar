import ReactDOM from 'react-dom'
import React from 'react'
import MenuLayout from "./menu/menu"
import Routes from "./routes/routes"
import {BrowserRouter} from 'react-router-dom';
require('../../stylesheet/semantic.css');


class App extends React.Component{

  render() {
    return (
      <BrowserRouter>
        <div>
          <MenuLayout />
          <Routes />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'))

