import {Link} from 'react-router-dom';
import classes from './NavFunction.module.css';
import Search from './Search'

const NavFunction = (params) => {
    return<div className={classes.navFunction}>
        <h3><Link to='/' className={classes.route}>Popular</Link></h3>
        <h3><Link to='/wishlist' className={classes.route}>Wishlist</Link></h3>
        <Search/>
    </div>
}

export default NavFunction;