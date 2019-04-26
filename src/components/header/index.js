import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './index.css';

import Icon from '../utilites/icon.js';
import Logo from './assets/logo.svg';

export default class Test extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Icon icon={Logo} className="icon-logo" width={100} height={32} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/second">Second page</Link>
          </li>
        </ul>
      </div>
    );
  }
}