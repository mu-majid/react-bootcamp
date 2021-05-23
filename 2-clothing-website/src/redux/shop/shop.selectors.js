import { createSelector } from 'reselect';

// Memoization of a redux state selector to prevent multiple un-necessary renders

const selectShop = state => state.shop;
export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);