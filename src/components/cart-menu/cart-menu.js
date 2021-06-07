import React from 'react'
import { createStructuredSelector } from 'reselect'
import CustomButton from '../custombutton/custombutton'
import CartItem from '../cart-item/cart-item'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import './cart-menu.styles.scss'

const CartMenu = ({ cartItems }) => {
    console.log('This is Cart Items:', cartItems)
    if (cartItems.length) {
        return (
            <div className="cart-dropdown">
                <div className="cart-items">
                    {cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))}
                </div>
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        )
    } else {
        return (
            <div className="cart-dropdown-empty">
                <div className="empty-cart-items">
                    Looks Like your Cart Is Empty
                </div>
                <CustomButton emptyCart>
                    Click Here To Start Shopping
                </CustomButton>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CartMenu)
