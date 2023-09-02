import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './left.css'

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://news71-server.vercel.app/news-categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, []);

    return (
            <div className='category-styles mx-auto'>
            <h4 className='mt-3 text-light mb-4 text-center '>All Category</h4>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
    );
};

export default LeftSideNav;