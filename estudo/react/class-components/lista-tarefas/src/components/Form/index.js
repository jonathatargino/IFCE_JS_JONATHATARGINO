import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleFormSubmit, handleInputChange, novaTarefa }) {
  return (
    <form onSubmit={handleFormSubmit} className="form" action="#">
      <input
        onChange={handleInputChange}
        value={novaTarefa}
        type="text"
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
