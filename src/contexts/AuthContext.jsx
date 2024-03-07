import { createContext } from "react";

// création du context d'authentification
const AuthContext = createContext({
    userId: '', // state
    email: '', // state
    nickname: '', // state
    setUserId: () => {}, // method to update state userId
    setEmail: () => {}, // method to update state email
    setNickname: () => {}, // method to update state nickname
});