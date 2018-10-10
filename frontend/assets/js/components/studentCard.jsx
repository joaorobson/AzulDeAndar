import React, {Component} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {getData} from '../resources/getData.jsx'


export default class StudentCard extends Component {

    constructor(props) {
      super(props)
      this.state = {image : ""}
    }

    componentWillReceiveProps = (nextProps) => {
      this.props = nextProps;

    }

    mountSchoolHistoric = () => {
      const schoolHitoricCard = (this.props.data.schools_names).map((school, index) => {
        return (<Card.Content key={index}>{school}</Card.Content>)
      })
      return schoolHitoricCard
    }

    render = () => {
      return (
    <Card color='green' style={{maxWidth:500, width:500}}>
      <Card.Content>
        <Image floated='left' height="180" width="180" src={this.props.data.image} />
        <Card.Header>
					{this.props.data.name}
        </Card.Header>



        <Card.Meta>
          Data de nascimento: {this.props.data.convert_date_of_birth}
        </Card.Meta>
     <br></br> 
      <Card.Content style={{color:"#5f5d5d"}}><strong>Pai:</strong> {this.props.data.father_name}</Card.Content>
      <Card.Content style={{color:"#5f5d5d"}}><strong>Mãe:</strong> {this.props.data.mother_name}</Card.Content>
      <Card.Content style={{color:"#5f5d5d"}}><strong>Responsável:</strong> {this.props.data.responsible}</Card.Content>
      <Card.Content style={{color:"#5f5d5d"}}><strong>Endereço:</strong> {this.props.data.adress}</Card.Content>
      <Card.Content style={{color:"#5f5d5d"}}><strong>Telefone(s):</strong> {this.props.data.get_telephone_numbers.join("/")}</Card.Content>
      <Card.Content style={{color:"#5f5d5d"}}><strong>NEE:</strong> {this.props.data.special_education_needs} </Card.Content>
      </Card.Content>
      {this.mountSchoolHistoric()}
 
    </Card>

		)
	}
}
                
