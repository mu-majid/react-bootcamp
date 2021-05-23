import React from 'react';
import CollectionsOverview from '../../components/Collections-Overview/collections-overview.component';

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  )
}


export default ShopPage;