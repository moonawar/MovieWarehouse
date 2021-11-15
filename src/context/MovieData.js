import React, {useEffect, useState, createContext} from 'react'
import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/list/7113038?api_key=b4296390412de96c5c724e42b1a09b8b&language=en-US")
            .then(res => {
                setPosts(res.data.items)
                console.log(res.data.items)
            })
            .catch(err => {
            })
    }, [])
    return(
        <MovieContext.Provider value={[posts, setPosts, wishlist, setWishlist]}>
            {props.children}
        </MovieContext.Provider>
    )
}


