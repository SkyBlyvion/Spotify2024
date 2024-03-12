import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./album/albumSlice"
import playerReducer from "./Player/PlayerSlice"
import userReducer from "./user/userSlice"

// Rayon de l'application (Store)
const store = configureStore({
    // ajouter les reducers ici
    reducer: {
        albums: albumReducer,
        player: playerReducer,
        user: userReducer,
    }
})

export default store