import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => {

  return (
    <div className="collection-item">
      <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;