import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./album/albumSlice"

// Rayon de l'application (Store)
const store = configureStore({
    // ajouter les reducers ici
    reducer: {
        albums: albumReducer,

        

    }
})

export default store