import React, {Component} from 'react'
import {getData} from '../resources/getData.jsx' 
import {Grid, Container, Button, Checkbox, Form } from 'semantic-ui-react'
import StudentCard from '../components/studentCard'
         
export default class StudentsList extends Component {

  constructor() {
    super()
    this.state = {students_images:[]}
    this.mountStudentsCards.bind(this)
  }


  getStudentsData = () => {
	getData("/api/students/",(data) => {
      this.setState({students_images: [...this.state.students_images,data[0].image]})
      console.log(data)
      console.log(this.state.students_images)
	 })
  }

  mountStudentsCards = () => {
    if(this.state.students_images.length > 0){
    const gameList = this.state.students_images.map((image, index) => {
      return(<Grid.Column key={index} >
        <StudentCard image={image} />
      </Grid.Column>)
    })
    console.log(gameList.length)
    return gameList;
    }
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

