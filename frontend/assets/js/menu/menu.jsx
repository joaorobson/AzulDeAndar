import React, { Component } from 'react'
import {Card, Container, Image, Input, Grid, Menu, Segment, Icon } from 'semantic-ui-react'
import {getData} from '../resources/getData.jsx'
import {Link} from "react-router-dom"




export default class MenuLayout extends Component {

 constructor(props) {
	super(props)
	this.state = { "activeItem": window.location.pathname }
	}

  handleItemClick(e, name) {
    this.setState({ "activeItem": window.location.pathname })
  }
    
  componentWillReceiveProps = () => {
    this.handleItemClick()
  }

  render() {
    const { activeItem } = this.state

    return (
		<div>
		<Grid centered>
		<Grid.Row>
		<Grid.Column width={16}>
		<Segment style= {{backgroundColor:"#7abdff"}} inverted>
        <Menu inverted secondary attached='top' tabular>
          <Menu.Item name='icone' as={Link} to={"/"} onClick={this.handleItemClick} >
            <Icon name='student' size='large' color='black' />
          </Menu.Item>
          <Menu.Item name='alunos' key={"/"} as={Link} to={"/"} active={activeItem === '/'} onClick={this.handleItemClick} />
          <Menu.Item name='turmas' key={"/classes/"} as={Link} to={"/classes/"} active={activeItem === '/classes/'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input transparent icon={{ name: 'search', link: true }} placeholder='Search users...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
		</Segment>
  </Grid.Column>
    </Grid.Row>
        </Grid>
		</div>
    )
  }
}

