import React, {Component} from 'react'
import {getData} from '../resources/getData.jsx' 
import {Grid, Container, Button, Checkbox, Form } from 'semantic-ui-react'
import StudentCard from '../components/studentCard'
        
export default class StudentsList extends Component {

  constructor() {
    super()
    this.state = {students_data:[]}
    this.mountStudentsCards.bind(this)
  }


  getStudentsData = () => {
	getData("/api/students/",(data) => {
      this.setState({students_data: data})
      console.log(data)
      console.log(this.state.students_data)
	 })
  }

  mountStudentsCards = () => {
    const gameList = this.state.students_data.map((data, index) => {
      return(<Grid.Column key={index} >
        <StudentCard image={data.image} />
      </Grid.Column>)
    })
    console.log(gameList.length)
    return gameList;
  }

  componentWillMount = () => {
    this.mountStudentsCards();
  }

  componentDidMount = () => {
    this.mountStudentsCards();
    this.getStudentsData();
  }

  render() {
    const a = this.mountStudentsCards()
    return (
        <Grid columns={4} >
        {this.mountStudentsCards()}
        </Grid>
     )
 }

        



}

