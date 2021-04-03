import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      className={`${size ? size : ''} menu-item`}
    >
      {/* This div is for the background image scaling on hovering effect */}
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW!</span>
      </div>
    </div>
  )
}

export default MenuItem;