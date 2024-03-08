import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./album/albumSlice"
import playerReducer from "./Player/PlayerSlice"

// Rayon de l'application (Store)
const store = configureStore({
    // ajouter les reducers ici
    reducer: {
        albums: albumReducer,
        player: playerReducer,
    }
})

export default store