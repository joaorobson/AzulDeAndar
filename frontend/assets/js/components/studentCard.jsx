import React, {Component} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {getData} from '../resources/getData.jsx'


export default class StudentCard extends Component {

    constructor(props) {
      super(props)
      this.state = {image : ""}
      console.log(this.props.image)
    }

    componentWillReceiveProps = (nextProps) => {
      console.log(nextProps)
      this.props = nextProps;

    }

    render = () => {
      console.log("allo")
      return (
		  <Card>
			<Image src={this.props.image} />
			<Card.Content>
			  <Card.Header>
			  </Card.Header>
			  <Card.Meta>
				<span className='date'>
				  Joined in 2015
				</span>
			  </Card.Meta>
			</Card.Content>
			<Card.Content extra>
		  <a>
				<Icon name='student' />
				22 Friends
			  </a>
			</Card.Content>
		  </Card>
		)
	}
}
                
