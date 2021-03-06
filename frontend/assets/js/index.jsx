import ReactDOM from 'react-dom'
import React from 'react'
import MenuLayout from "./menu/menu"
import StudentCard from "./components/studentCard"
import Routes from "./routes/routes"
import {BrowserRouter} from 'react-router-dom';
import StudentsList from './pages/studentsList'
import 'semantic-ui-css/semantic.min.css';



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
