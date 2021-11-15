import classes from './Nav.module.css'
import Logo from './Logo'
import NavFunction from './NavFunction'

const Nav = (props) => {
    return <div className={classes.nav}>
        <Logo/>
        <NavFunction/>
    </div>
}

export default Nav