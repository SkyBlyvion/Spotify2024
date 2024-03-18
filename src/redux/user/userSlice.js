import { createSlice } from "@reduxjs/toolkit";
import { apiUrl } from "../../constants/apiConstant";
import axios from "axios";

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        userFavorite: [],
        user: {},
    },
    reducers:{
        setLoading: (state, action)=>{
            state.loading = action.payload;
        },
        setUserFavorite: (state, action)=>{
            state.userFavorite = action.payload
        },
        setUser: (state, action)=>{
            state.user = action.payload
        },
    }
})

export const {setLoading, setUserFavorite, setUser} = userSlice.actions;

// méthode qui récupére les albums favoris de l'user
export const fetchUserFavorite = (id) => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await axios.get(`${apiUrl}/users?page=1&id=${id}`);
        dispatch(setUserFavorite(response.data['hydra:member'][0].albums));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.log(`Erreur lors de la requête fetchUserFavorites: ${error}`);
    }
}

// méthode qui recupere les infos de l'user
// récupére l'id de l'user
export const fetchUser = (id) => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await axios.get(`${apiUrl}/users/${id}`);
        dispatch(setUser(response.data));
        dispatch(setLoading(false));
    } catch (error) {
        console.log(`Erreur lors de la requête fetchUser: ${error}`);
        dispatch(setLoading(false));
    }
}

export default userSlice.reducer