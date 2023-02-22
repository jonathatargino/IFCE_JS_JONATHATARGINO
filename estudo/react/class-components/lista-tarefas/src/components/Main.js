import React, { Component } from 'react';
import './Main.css';

// Form
import { FaPlus } from 'react-icons/fa';

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

        <form className="form" action="#">
          <input
            onChange={this.handleInputChange}
            value={novaTarefa}
            type="text"
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
