import React from 'react';
import { Link } from 'react-router-dom';

const HeaderCategory = ({ dataAlbum }) => {

    //on récupére notre tableau de genre
    const categories = dataAlbum?.genre;

    return (
        <div className='flex items-center justify-start mt-4'> 
            {categories && categories.map((category, index) => (
                index === 0
                ? <Link key={index} to='#' className='font-medium cursor-pointer'>{category.label}</Link>
                : <div key={index}>
                    {index !== 0 && <span className="mx-2">&#8226;</span>}
                    <Link to='#' className='font-medium cursor-pointer'>{category.label}</Link>
                </div>
            ))}
        </div>
    );
};

export default HeaderCategory;
