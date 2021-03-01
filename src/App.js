import React from 'react';
import Form from './Form';
import Item from './Item';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <Item groceryItem={this.state.name}/>
      </div>
    )
  }
}

export default App;

