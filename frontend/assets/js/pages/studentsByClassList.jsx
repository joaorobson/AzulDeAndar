import React, {Component} from 'react'
import {getData} from '../resources/getData.jsx' 
import {Grid, Container,Header, Divider} from 'semantic-ui-react'
import StudentCard from '../components/studentCard'
        
export default class StudentsByClassList extends Component {

  constructor() {
    super()
    this.state = {students_data:[]}
    this.mountStudentsCards.bind(this)
  }


  getStudentsData = () => {
	getData("/api/student/classes/" + this.props.match.params.class_name + "/",(data) => {
      this.setState({students_data: data})
      
      console.log(data)
      console.log(this.state.students_data)
	 })
  }

  mountStudentsCards = () => {
    const gameList = this.state.students_data.map((data, index) => {
      return(<Grid.Column key={index} >
        <StudentCard data={data} />
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
        <Container>
        <Grid divided={"vertically"}>
        <Grid.Row >
        <Grid.Column>
        <Header textAlign="center" size="huge">{this.props.match.params.class_name}</Header>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2} >
        {this.mountStudentsCards()}
        </Grid.Row>
        </Grid>
        </Container>
     )
 }

        



}


