import { createSlice } from "@reduxjs/toolkit"

// on va init nos states dans une constante nommé initialState
const initialState = {
    currentAlbum: [], // album en cours de lecture
    currentSongs: [], // tableau de chansons
    currentIndex: 0, // index de la chanson en cours de lecture
    isActive: false, // état du player
    isPlaying: false, // etat de la lecture
    activeSong: {}, // chanson en cours de lecture
}

// création du slice pour la gestion du player
const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        // on va definir nos setters pour chaque propriété du state
        // Tout ce que l'on stocke lorsceque l'on active une chanson
        setActiveSong: (state, action) => {

            // stockage de la chanson en cours de lecture dans ActiveSong
            state.activeSong = action.payload?.songs[action.payload?.index];
            // stockage du tableau de chansons
            state.currentSongs = action.payload?.data?.songs;
            // stockage de l'index de la chanson en cours de lecture
            state.currentIndex = action.payload?.index;
            // stockage de l'etat du player
            state.isActive = true;
       

        },

        setActiveAlbum: (state, action) => {
            // on stocke les infos de l'album
            // ? si pas de data
            state.currentAlbum = action.payload?.data;
        },

        // méthode pour avancer la lsite de lecture
        nextSong: (state, action) => {
            // on récupère la chanson dans le tableau a l'inde dnné
            state.activeSong = state.currentSongs[action.payload];
            // on stocke l'index
            state.currentIndex = action.payload;
            state.isActive = true;  
        },

        // méthode pour revenir à la chanson precedente
        prevSong: (state, action) => {
            // on recupère la chanson dans le tableau a l'index dnné
            state.activeSong = state.currentSongs[action.payload];
            // on stocke l'index
            state.currentIndex = action.payload;
            state.isActive = true;  
        },

        // on va changer l'etat du player
        playPause: (state, action) => {
            state.isPlaying = action.payload;
        },


    }
})

//export des actions
export const {setActiveSong, setActiveAlbum, nextSong, prevSong, playPause} = playerSlice.actions

//export du reducer
export default playerSlice.reducer