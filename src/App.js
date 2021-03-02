import React from 'react';
import Form from './Form';
import FormList from './FormList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      userInputs: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let userInputs = [...this.state.userInputs];
    userInputs.push(this.state.name)
    this.setState({
      name: '',
      userInputs: userInputs,
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} name={this.state.name}/>
        <FormList groceriesList={this.state.userInputs}/>
      </div>
    )
  }
}

export default App;

