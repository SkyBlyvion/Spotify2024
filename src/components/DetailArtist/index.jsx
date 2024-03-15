import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchArtists } from '../../redux/artist/artistSlice';
import { selectArtistsData } from '../../redux/artist/artistSelector';
import PageLoader from '../loader/PageLoader';
import ArtistCard from '../ArtistCard';


const DetailArtist = () => {

    // on recupere le hook paarams
    const params = useParams();

    // on apelle le hook dispatch pour executer la methode du slice
    const dispatch = useDispatch();

    // on recupére le parametre id de l'url
    const id = params.id;

    useEffect(()=> {
       dispatch(fetchArtists(id))
    }, [])

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    }, [])

    // recupere le sinfo de lartiste par le selector
    const {artistsDetails, loading} = useSelector(selectArtistsData)

    console.log('detail artiste',artistsDetails)

    // petit element graphique pour faire un point de separation
    const Dot = () => (
        <p>&#8226;</p>
    )
    
    return (
        isLoading ? <PageLoader /> :
        <>
            <div>
                <p>Name: {artistsDetails?.name}</p>
                <Dot/>
                <p>Biography: {artistsDetails?.biography}</p>
                <Dot/>
                <p>Albums: {artistsDetails?.albums?.length}</p>
                <Dot/>
                <p>Card</p>
                <ArtistCard />
            </div>
        </>
    );
};

export default DetailArtist;
