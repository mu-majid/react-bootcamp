import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/Collections-Overview/collections-overview.component';
import CollectionPage from '../Collection/collection.component';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}


export default ShopPage;