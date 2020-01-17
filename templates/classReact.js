module.exports = word => {
  return `
    import React, { Component, Fragment } from 'react';
    import PropTypes from 'prop-types';

    class ${word} extends Component {
      constructor(props) {
        super(props);
      }
      componentDidMount() {}
      render() {
        return (
          <Fragment>
            <div>Hello World!!</div>
          </Fragment>
        );
      }
      componentWillUnmount() {}
    }

    ${word}.propTypes = {};

    export default ${word};
  `;
};
