export const AddProductLogic = (state, product, qty) => {
    let findInCart = state.find((item) => item._id === product._id);
    console.log(findInCart)
    if (findInCart) {
        return state.map((item) =>
            item._id === product._id ? {...item, qty: +item.qty + qty } : item)
    } else {
        return [...state, {...product, qty: qty }]
    }
}

export const increaseLogic = (state, productId) => {

    console.log(state)
    return state.map((item) => {
        return item._id == productId ? {...item, qty: item.qty + 1 } : item
    })

}

export const reduceLogic = (state, productId) => {
    let findInCart = state.find((item) => item._id === productId);
    if (findInCart.qty === 1) {
        return state.filter((item) =>
            item._id !== productId
        );
    } else {
        return state.map((item) => {
            return item._id == productId ? {...item, qty: item.qty - 1 } : item
        })

    }
}

export const clearCartLogic = (state, cartState) => {
    return state.filter((item, index) => item._id !== cartState[index]._id);

}