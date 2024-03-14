import { createSelector } from "@reduxjs/toolkit";

// on recupere les données du slice que l'on met dans des constantes
// slice albums, selectAlbums
const selectAlbums = state => state.albums.albums;
const selectLoading = state => state.albums.loading;
const selectAlbumsDetails = state => state.albums.albumDetails;
const selectSearchAlbum = state => state.albums.searchAlbum;

// on crée le selector qui permet de recuperer les données du state
export const selectAlbumsData = createSelector(
    [selectAlbums, selectLoading, selectAlbumsDetails, selectSearchAlbum],
    // on effectue une destructuration des données
    // fonction annonyme return 
    (albums, loading, albumDetails, searchAlbum)=>({albums, loading, albumDetails, searchAlbum})
);

