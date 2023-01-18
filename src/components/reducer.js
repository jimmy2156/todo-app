


const reducer = (state, action) => {
if (action.type === "INCREASE") {
    let tempCart = state.products.map((phone) => {
        if (phone.id === action.payload) {
            return {
                ...phone, amount: phone.amount + 1
            }
        }
        return phone
    })
    return {...state, products: tempCart}
}
if (action.type === "DECREASE") {
    let tempCart = state.products.map((phone) => {
        if (phone.id === action.payload) {
            return {
                ...phone, amount: phone.amount - 1
            }
            
        }
        return phone
    })
    return {...state, products: tempCart}
}
if (action.type === "REMOVE") {
    let tempCart = state.products.filter((phone) => 

        phone.id !== action.payload

    )
    return {...state, products: tempCart}
}
if (action.type === 'DELETE_ALL') {
    return {...state, products: []}
}
if (action.type === "GET_TOTAL") {
    let {total, amount} = state.products.reduce((cartTotal, cartItem) => {

   let {price, amount} = cartItem
   const itemTotal = price * amount
   cartTotal.total += itemTotal
   cartTotal.amount += amount
   return cartTotal  }, 
    {total: 0,
    amount: 0})
    return {...state, total, amount}
}
}


export default reducer