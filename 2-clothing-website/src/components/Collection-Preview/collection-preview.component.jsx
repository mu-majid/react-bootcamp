import React from 'react';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {

  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {
          items.map(i => (<div key={i.id}> {i.name} </div>))
        }
      </div>
    </div>
  )
}

export default CollectionPreview;
