export const AddProductLogic = (state, product, qty) => {
    let findInCart = state.find((item) => item.id === product.id);
    if (findInCart) {
        return state.map((item) =>
            item.id === product.id ? {...item, qty: +item.qty + qty } : item)
    } else {
        return [...state, {...product, qty: qty }]
    }
}

export const increaseLogic = (state, productId) => {
    return state.map((item) => {
        return item.id === productId ? {...item, qty: item.qty + 1 } : item
    })

}

export const reduceLogic = (state, productId) => {
    let findInCart = state.find((item) => item.id === productId);
    console.log(findInCart);
    if (findInCart.qty == 1) {
        return state.filter((item) =>
            item.id !== productId
        );
    } else {
        return state.map((item) => {
            return item.id == productId ? {...item, qty: item.qty - 1 } : item
        })

    }
}

export const clearCartLogic = (state, cartState) => {
    return state.filter((item, index) => item.id !== cartState[index].id);

}