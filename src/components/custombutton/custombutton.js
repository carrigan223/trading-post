import React from 'react'

import './custombutton.styles.scss'

const CustomButton = ({
    children,
    isGoogleSignIn,
    inverted,
    emptyCart,
    ...otherProps
}) => (
    <button
        className={` ${inverted ? 'inverted' : ''} ${
            emptyCart ? 'empty-cart' : ''
        } ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
)

export default CustomButton
