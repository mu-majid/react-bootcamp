import React from 'react';
import './card-list.styles.css';

const CardList = props => {
  console.log('CardList ', props);
  return (
    <div className='card-list'>
      {props.children}
    </div>
  );
}

export default CardList;