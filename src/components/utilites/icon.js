import React, { Component } from 'react'

export default class Icon extends Component {
  constructor() {
    super();
  }
  render() {
    const { className, width, height } = this.props;
    const { url, viewBox } = this.props.icon;
    
    return (
      <svg className={`icon ${className}`} viewBox={viewBox} style={{width: `${width}px`, height: `${height}px`}}>
        <use xlinkHref={`${url}`} />
      </svg>
    )
  }
}

Icon.defaultProps = {
  className: ''
};