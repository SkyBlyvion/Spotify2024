import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAlbumsDetails } from '../../redux/album/albumSlice'
import { selectAlbumsData } from '../../redux/album/albumSelector'
import PageLoader from '../../components/loader/PageLoader'
import DetailAlbum from '../../components/DetailAlbum'

const Details = () => {
    const params = useParams();
    const dispatch = useDispatch();
    // on recupére le parametre id de l'url
    const id = params.id;
    useEffect(()=> {
       dispatch(fetchAlbumsDetails(id))
    }, [])

    const {loading, albumDetails} = useSelector(selectAlbumsData);
    console.log(albumDetails)
  return (

    loading ? <PageLoader/> : 
    <DetailAlbum dataAlbum={albumDetails}/>
        
  )
}

export default Details