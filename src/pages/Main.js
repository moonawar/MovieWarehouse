import React, {useContext} from 'react'
import { MovieContext } from '../context/MovieData';

import classes from './Main.module.css'
import Nav from '../components/Nav'
import Movies from '../components/Movies'
import Alert from '../components/Alert'
import Description from '../components/description/Description';

const Main = (props) => {
    const posts = useContext(MovieContext)[0];
    return <main className={classes.main}>
        <Description/> 
        <Alert/>
        <Nav/>
        <Movies data={posts} page='movies'/>
    </main>
}

export default Main