import React from 'react';
import PropTypes from 'prop-types';

const Console = ({ data }) => {
  const json = JSON.stringify(data);
  return <div>
    <h4>Data from Redux.</h4>
    { json }
  </div>;
};

Console.propTypes = {};

export default Console;
