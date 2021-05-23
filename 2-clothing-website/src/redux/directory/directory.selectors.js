import { createSelector } from 'reselect';

// Memoization of a redux state selector to prevent multiple un-necessary renders

const selectDirectory = state => state.directory;
export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);