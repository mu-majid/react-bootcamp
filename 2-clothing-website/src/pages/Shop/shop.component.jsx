import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/Collection-Preview/collection-preview.component';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => {
  return (
    <div>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);