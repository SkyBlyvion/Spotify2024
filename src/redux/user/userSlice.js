import { createSlice } from "@reduxjs/toolkit";
import { apiUrl } from "../../constants/apiConstant";
import axios from "axios";

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        userFavorite: [],
    },
    reducers:{
        setLoading: (state, action)=>{
            state.loading = action.payload;
        },
        setUserFavorite: (state, action)=>{
            state.userFavorite = action.payload
        }
    }
})

export const {setLoading, setUserFavorite} = userSlice.actions;
export const fetchUserFavorite = (id) => async dispatch => {
    try {
        dispatch (setLoading(true));
        const response = await axios.get(`${apiUrl}/users?page=1&id=${id}`);
        dispatch(setUserFavorite(response.data.albums));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.log(`Erreur lors de la requête fetchUserFavorites: ${error}`);
    }
}

export default userSlice.reducer