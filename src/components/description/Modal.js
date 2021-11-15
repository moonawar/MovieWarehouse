import { useContext } from 'react'
import { DescContext } from '../../context/DescContext'
import classes from './Modal.module.css'

const Modal = (params) => {
    const insight = useContext(DescContext)[0];
    const dynamicPoster = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${insight.backdrop_path})`,
      };
    
    return <div className={classes.modal} style={dynamicPoster}>
        <div className={classes.insight}>
            <h2>{insight.title}{insight.name} — {insight.vote_average}⭐</h2>
            <p>{insight.overview}</p>
        </div>
    </div>
}

export default Modal
