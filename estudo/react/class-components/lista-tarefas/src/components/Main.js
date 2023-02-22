import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  handleInputChange = (e) => {
    this.setState({ novaTarefa: e.target.value });
  };

  render() {
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>Liste de tarefas</h1>
        <h2>{novaTarefa}</h2>

        <form action="#">
          <input onChange={this.handleInputChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
