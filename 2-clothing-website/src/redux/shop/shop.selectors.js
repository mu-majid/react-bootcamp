import { createSelector } from 'reselect';

const COLLECTION_URL_ID_MAP = {
  hats: 1,
  sneaker: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

// Memoization of a redux state selector to prevent multiple un-necessary renders

const selectShop = state => state.shop;
export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectShopCollections],
  (collections) => collections.find(c => c.id === COLLECTION_URL_ID_MAP[collectionUrlParam])
)