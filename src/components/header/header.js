import React from 'react'
import { connect } from 'react-redux' //connect is a higher order compnent
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firbase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon'

import './header.styles.scss'

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            {currentUser ? (
                <span className="welcome">
                    Welcome to the Trading Post {currentUser.displayName}
                </span>
            ) : (
                <Link to="/signin" className="welcome">
                    Sign up now to get started
                </Link>
            )}
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {currentUser ? (
                    <div
                        className="option sign-out"
                        onClick={() => auth.signOut()}
                    >
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                )}
            </div>
                <CartIcon />
        </div>
    )
}
//connect is a higher order component that takes in the component
//then we map over the reducer state to get the required slice and
//inject it as props
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header)
