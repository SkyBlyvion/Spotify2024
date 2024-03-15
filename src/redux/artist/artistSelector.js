import { createSelector } from "@reduxjs/toolkit";

//on recupere les données du slice que l'on met dans des constantes
const selectLoading = state => state.artists.loading;
const selectArtistsDetails = state => state.artists.artistsDetails;

// on crée le selector qui permet de recuperer les donnés du state
export const selectArtistsData = createSelector(
    [selectLoading, selectArtistsDetails],
    (loading, artistsDetails) => ({loading, artistsDetails})
)