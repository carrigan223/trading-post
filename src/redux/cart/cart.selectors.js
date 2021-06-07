import { createSelector } from 'reselect'

const selectCart = (state) => state.cart

const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden)

const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity,
        0
    )
)

export { selectCartItemsCount, selectCartItems, selectCartHidden }
