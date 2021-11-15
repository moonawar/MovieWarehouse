import React, {useContext} from 'react'
import { MovieContext } from '../context/MovieData';

import classes from './Wishlist.module.css'
import Nav from '../components/Nav'
import Movies from '../components/Movies'
import Alert from '../components/Alert'
import Description from '../components/description/Description';

const Wishlist = (props) => {
    const wishlist = useContext(MovieContext)[2];
    return <main className={classes.wishlist}>
        <Description/>
        <Alert/>
        <Nav/>
        <Movies data={wishlist} page='wishlist'/>
    </main>
}


export default Wishlist