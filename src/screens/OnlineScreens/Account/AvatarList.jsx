import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';
import { fetchAvatars } from '../../../redux/user/userSlice';
import PageLoader from '../../../components/loader/PageLoader';
import { apiUrl, avatarUrl } from '../../../constants/apiConstant';
import axios from 'axios';

const AvatarList = () => {

    // on recupere le hook
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // on recupere id user depuis authContext
    const {userId} = useAuthContext();

    // on dispatche la requête, pour remplir les states
    useEffect(() => {
        dispatch(fetchAvatars());
    }, [])

    // on recupere les states / liste d'avatars
    const {loading, avatars} = useSelector(state => state.user)
    // console.log('avatars', avatars)

    const handleClick = (avatarId) => {
       const data = {
           avatar: `/api/avatars/${avatarId}`
       }
       //config de la méthode patch pour axios
       axios.defaults.headers.patch['Content-Type'] = 'application/merge-patch+json';
       axios.patch(`${apiUrl}/users/${userId}`, data).then((res)=>{
            if(res.status === 200){
                navigate(`/account/${userId}`)
            }

       }).catch((error)=>{
           console.log(`error patch avatar : ${error}`)
       })
    }

  return (
    loading ? <PageLoader /> :
    <>
        <h2 className='text-white text-3xl font-bold text-center pt-6'>Choisir un nouvel avatar</h2>
        <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-5'>
            {avatars && avatars.map((avatar)=>(
                <div key={avatar.id} className='w-30 h-30 cursor-pointer ml-2' onClick={()=>{handleClick(avatar.id)}}>
                    <img src={`${avatarUrl}/${avatar.imagePath}`} alt="avatar profil" className='w-full h-full rounded-full' />
                </div>
            ))}
        </div>
    </>

  )
}

export default AvatarList