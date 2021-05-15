import React from 'react';
import Button from '../Button/button.component';
import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => {

  return (
    <div className="collection-item">
      <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted={true}>Add to Cart</Button>
    </div>
  );
};

export default CollectionItem;