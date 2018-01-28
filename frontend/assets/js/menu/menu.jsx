import React, { Component } from 'react'
import {Card, Container, Image, Input, Grid, Menu, Segment } from 'semantic-ui-react'
import {getData} from '../resources/getData.jsx'



export default class MenuLayout extends Component {

 constructor(props) {
	super(props)
	this.state = { activeItem: 'alunos' }
    this.handleItemClick = this.handleItemClick.bind(this)
	}

  handleItemClick(e, name) 
  {console.log(name)
    this.setState({ activeItem: name.name })}
    
  componentWillReceiveProps = () => {
    this.handleItemClick()
  }
  load(){
  const a = '/api/bla/';
  }
  render() {
    const { activeItem } = this.state
    this.load();
    return (
		<div>
		<Grid centered>
		<Grid.Row>
		<Grid.Column width={16}>
		<Segment style= {{backgroundColor:"#7abdff"}} inverted>
        <Menu inverted secondary attached='top' tabular>
          <Menu.Item name='alunos' active={activeItem === 'alunos'} onClick={this.handleItemClick} />
          <Menu.Item name='turmas' active={activeItem === 'turmas'} onClick={this.handleItemClick} />
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

