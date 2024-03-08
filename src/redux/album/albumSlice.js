import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../constants/apiConstant";
// on crée notre premier reducer
const albumSlice = createSlice({
    // on lui donne un nom
    name: 'albums',
    // on lui donne un state initial( valeurs par defaut)
    initialState: {
        albums: [], // on init un tableau vide pour les albums
        loading: false, // on init le state loading a false pour pouvoir gerer lattente des requetes asyncrones
        albumDetails: {},
    },
    // methode qui permet de remplir les states (mise en rayon)
    reducers: {
        // on lui ajoute une methode qui permet de remplir le state albums
        setAlbums: (state, action)=>{
            state.albums = action.payload
        },
        setLoading: (state, action)=>{
            state.loading = action.payload
        },
        setAlbumDetails: (state, action)=>{
            state.albumDetails = action.payload
        }
    }
});
export const { setAlbums, setLoading, setAlbumDetails } = albumSlice.actions;

// on crée la méthode qui permet de recuperer les données des albums de la bdd
export const fetchAlbums = () => async dispatch => {
    try {
        // on passe le state loading a true pour signifier qu'on attend une réponse
        dispatch(setLoading(true));
        const response = await axios.get(`${apiUrl}/alba?page=1&isActive=true`);
        // on set les données dans le state albums
        dispatch(setAlbums(response.data));
        // on repasse le state loading a false pour signifier qu'on a fini de recuperer les données
        dispatch(setLoading(false));
    } catch (error) {
        console.log(`Erreur sur fetch album: ${error}`);
        dispatch(setLoading(false));
    }
};

// on crée la méthode pour recupere les infos d'un album particulier
export const fetchAlbumsDetails = (id) => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await axios.get(`${apiUrl}/alba?page=1&isActive=true&id=${id}`);
        dispatch(setAlbumDetails(response.data['hydra:member'][0]));
        dispatch(setLoading(false));
        
    } catch (error) {
        console.log(`Erreur sur fetch albumDetail: ${error}`);
        dispatch(setLoading(false));

    }
};

export default albumSlice.reducer
