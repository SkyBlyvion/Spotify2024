import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectUserData } from '../../../redux/user/userSelector';
import { fetchUser } from '../../../redux/user/userSlice';
import PageLoader from '../../../components/loader/PageLoader';

const Account = () => {

    // on recupere le hook
    const dispatch = useDispatch();

    // on utilise params
    const params = useParams();

    // recupere l'id depuis l'url
    const userId = params.id

    // on dispatche la requête, pour remplir les tates
    useEffect(() => {
        dispatch(fetchUser(userId));
    }, [])

    // on recupere les tates
    const {loading, user} = useSelector(selectUserData);

    console.log('zzz', user)

    if(loading) return <PageLoader />

  return (

    <div>Mon compte</div>
  )
}

export default Account