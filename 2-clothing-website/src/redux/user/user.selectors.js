import { createSelector } from 'reselect';

// Memoization of a redux state selector to prevent multiple un-necessary renders

const selectUser = state => state.user;
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
