import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


// Memoization of a redux state selector to prevent multiple un-necessary renders

const selectShop = state => state.shop;
export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  )
);