export const addItemtoCart= (cartItems, service) => {
    const serviceInCart= cartItems.find((item) => item.id === service.id);

    if(serviceInCart){
        return cartItems.map((item) => 
            item.id === serviceInCart.id ? {
                ...item,
                quantity: item.quantity +1
            } : item );

    }

    return [ ...cartItems, {...service, quantity: 1}]

}


export const removeItemFromCart= (cartItems, id) =>{
    const serviceToRemove= cartItems.find((item) => item.id === id);

    if (serviceToRemove.quantity > 1) {
        return cartItems.map((item) => item.id === serviceToRemove.id ? 
        {
            ...item, quantity : item.quantity -1
        } : item)
    }

    return cartItems.filter((item) => item.id !== serviceToRemove.id)
}