export const AddProduct = (product, qty) => {
    return {
        type: "ADD_PRODUCT",
        payload: product,
        payloadQty: qty
    }
}

export const ReduceQty = (productId) => {
    return {
        type: "REDUCE",
        payload: productId
    }
}

export const IncreaseQty = (productId) => {
    return {
        type: "INCREASE",
        payload: productId
    }
}

export const ClearCart = (state) => {
    return {
        type: "CLEAR_CART",
        payload: state
    }
}