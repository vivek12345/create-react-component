module.exports = word => {
  return `
    import React, { Fragment } from 'react';
    import PropTypes from 'prop-types';

    const ${word} = props => {
      return (
        <Fragment>
          <div>Hello World!!</div>
        </Fragment>
      );
    };

    ${word}.propTypes = {};

    export default ${word};
  `;
};
