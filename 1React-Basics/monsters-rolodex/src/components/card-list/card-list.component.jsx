import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = props => {
  console.log('CardList ', props);
  const monsterCards = props.monsters.map(m => <Card key={m.id} monster={m} />);

  return (
    <div className='card-list'>
      {monsterCards}
    </div>
  );
}

export default CardList;