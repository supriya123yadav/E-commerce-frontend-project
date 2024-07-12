import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{

    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;

    }
    return cart;
}
const ShopContextProvider = (props) => {

    const contextValue = {all_product};

    

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;