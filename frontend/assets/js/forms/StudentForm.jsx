import React from 'react';
import {Grid, Container, Button, Checkbox, Form } from 'semantic-ui-react'


export default class StudentForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {disabled : true, dadChecked : false, momChecked: false, otherChecked : false};
  }

  enableOtherResponsible = () => {
    this.setState({disabled : !this.state.disabled, dadChecked : false, momChecked : false, otherChecked : !this.state.otherChecked});
  }

  checkDad = () => {
    this.setState({dadChecked : !this.state.dadChecked});
  }
  checkMom = () => {
    this.setState({momChecked : !this.state.momChecked});
  }

  uncheckOtherOption = () => {
    this.setState({disabled : true, otherChecked : false});
  }


  render = () => {

    return (
        <Grid divided='vertically'>
        <Grid.Row columns={1}>
        <Grid.Column>
        <Container>
		 <Form>
    <Form.Field>
      <label>Nome</label>
      <input placeholder='Nome' />
    </Form.Field>
    <Form.Field>
      <label>Sobrenome</label>
      <input placeholder='Sobrenome' />
    </Form.Field>
    <Form.Field>
      <label>Data de nascimento</label>
      <input placeholder='Data de nascimento' />
    </Form.Field>
    <Form.Field>
      <label>Pai</label>
      <input placeholder='Nome do pai' />
    </Form.Field>
    <Form.Field>
      <label>Mãe</label>
      <input placeholder='Nome da mãe' />
    </Form.Field>
    <Form.Group grouped>
    <label>Responsáveis</label>
    <Form.Checkbox label='Pai' onClick={this.uncheckOtherOption} onChange={this.checkDad} checked={this.state.dadChecked} />
    <Form.Checkbox label='Mãe' onClick={this.uncheckOtherOption} onChange={this.checkMom} checked={this.state.momChecked} />
    <Form.Checkbox onClick={this.enableOtherResponsible} checked={this.state.otherChecked} label='Outro' />
    <Form.Field  disabled={this.state.disabled}>
      <input placeholder='Nome do responsável'size='large' />
    </Form.Field>
    </Form.Group>
    
    <Button type='submit'>Submit</Button>
  </Form>
  </Container>
  </Grid.Column>
  </Grid.Row>
  </Grid>
)
}

}
