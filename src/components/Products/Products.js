import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase()
    return (
        <div>
            <h1>who is there</h1>
            <h3>{user ? user.displayName : "voot"}</h3>
        </div>
    );
};

export default Products;