import { createSelector } from "@reduxjs/toolkit";

const selectLoading = state=>state.user.loading;
const selectUserFavorite = state=>state.user.userFavorite
const selectUser = state=>state.user.user;

// on crée le selector
export const selectUserData = createSelector(
    [selectLoading, selectUserFavorite, selectUser],
    (loading, userFavorite, user) => ({loading, userFavorite, user})
)