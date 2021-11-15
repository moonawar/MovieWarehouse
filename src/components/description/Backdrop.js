import { useContext } from 'react'
import { DescContext } from '../../context/DescContext'
import classes from './Backdrop.module.css'

const Backdrop = (props) => {
    const [open, setOpen] = useContext(DescContext).slice(2,4);
    return <div className={open} onClick={() => {
        setOpen(classes.backdrop_hide)
    }}>
        {props.children}
    </div>
}

export default Backdrop