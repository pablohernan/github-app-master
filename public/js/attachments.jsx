// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const p = pipefyClient.init();
const Promise = pipefyClient.Promise;
const octicons = require("octicons")

import './Example.css'

const Props = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any,
}

class Example extends Component  {
  render() {
    return (
      <button className="Example" onClick={this.props.onClick}>
        2-Button: { this.props.children }
      </button>
    )
  }
}

Example.propTypes = Props

export default Attachments


