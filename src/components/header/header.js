import React from 'react'
import { connect } from 'react-redux' //connect is a higher order compnent
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firbase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

import CartIcon from '../cart-icon/cart-icon'
import CartMenu from '../cart-menu/cart-menu'

import './header.styles.scss'

const Header = ({ currentUser, hidden }) => {
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
                <CartIcon />
            </div>
            {hidden ? null : <CartMenu />}
        </div>
    )
}
//connect is a higher order component that takes in the component
//then we map over the reducer state to get the required slice and
//inject it as props
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
