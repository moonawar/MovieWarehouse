import { createContext, useState } from "react";
import classes from '../components/description/Backdrop.module.css';

export const DescContext = createContext();

export const DescProvider = (props) => {
    const [insight, setInsight] = useState([])
    const [open, setOpen] = useState(classes.backdrop_hide)

    return <DescContext.Provider value={[insight, setInsight, open, setOpen]}>
        {props.children}
    </DescContext.Provider>
}
