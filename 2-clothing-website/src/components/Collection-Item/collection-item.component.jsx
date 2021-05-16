import React from 'react';
import {connect} from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import Button from '../Button/button.component';
import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {

  return (
    <div className="collection-item">
      <div style={{backgroundImage: `url(${item.imageUrl})`}} className="background-image" />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <Button onClick={() => addItem(item)} inverted={true}>Add to Cart</Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);