import { useContext } from 'react'
import { PopUpContext } from '../context/PopUp'

const Alert = (params) => {
    const popUpText = useContext(PopUpContext)[2];
    const alertClass = useContext(PopUpContext)[0];
    
    return <div className={alertClass}>
        <h5>{popUpText}</h5>
    </div>
}

export default Alert