import { createSlice } from "@reduxjs/toolkit";
import { apiUrl } from "../../constants/apiConstant";
import axios from "axios";

const artistSlice = createSlice({
    name: 'artists',
    initialState: {
        artistDetail: {},
        loading: false,
        
    },
    reducers: {
        setArtistsDetail: (state, action)=>{
            state.artistDetail = action.payload['hydra:member'][0];
        },
        setLoading: (state, action)=>{
            state.loading = action.payload
        }
    }
});

export const { setArtistsDetail, setLoading } = artistSlice.actions;

// méthodes pour recuperer les données des artistes de la bdd
export const fetchArtists = (id) => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await axios.get(`${apiUrl}/artists?page=1&id=${id}&albums.isActive=true`);
        dispatch(setArtistsDetail(response.data));
        dispatch(setLoading(false));
    } catch (error) {
        console.log(`Erreur sur fetch artist: ${error}`);
        dispatch(setLoading(false));
    }
}
export default artistSlice.reducer