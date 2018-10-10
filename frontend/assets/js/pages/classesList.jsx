import React, {Component} from 'react'
import {getData} from '../resources/getData.jsx' 
import {Grid, Container,Card, Button, Checkbox, Form, Label} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class ClassesList extends Component {

  constructor() {
    super()
    this.state = {classes_data:[]}
  }

  getClassesData = () => {
    getData("/api/classes/", (data) => {
      this.setState({classes_data:data})
    })
  }

  mountClassesCards = () => {
    const classesList = this.state.classes_data.map((data, index) => {
      return(<Grid.Column key={index} >
              <Label as={Link} to={"/classes/" + data.name + "/"} size="big" style={{backgroundColor:"#7abdff", width:100, height:50}} ><center><font color="#fff">{data.name}</font></center></Label>
             </Grid.Column>)
      })
    return classesList;
  }
  
  componentWillMount() {
    this.mountClassesCards();
  }

  componentDidMount() {
    this.mountClassesCards();
    this.getClassesData();
  }

  render() {
    console.log('aqui')
    return(
        <Container>
        <Grid columns={8} >
        {this.mountClassesCards()}
        </Grid>
        </Container>
    )

 }


}


