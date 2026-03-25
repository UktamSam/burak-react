import { useState } from "react";
import { CartItem } from "../../lib/types/search";

const useBasket = () => {
    const cartJson: string | null = localStorage.getItem("cartData");
    const currentCart: CartItem[] = cartJson ? JSON.parse(cartJson) : []; // JSON.parse => Object _id
    const [cartItems, setCartItems] = useState<CartItem[]>(currentCart);

    const onAdd = (input: CartItem) => {
    const exist: any = cartItems.find((item: CartItem) => item._id === input._id);
    if (exist) {
        const cartUpdate = cartItems.map(( item: CartItem ) => 
        item._id === input._id //match?
        ? { ...item, quantity: item.quantity + 1 } // return NEW Object
        : item // return SAME Object (no changes)
    );
    setCartItems(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
        const cartUpdate = [...cartItems, { ...input}];
        setCartItems(cartUpdate);
        localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
    };

    const onRemove = (input: CartItem) => {
        const exist: any = cartItems.find(
            (item: CartItem) => item._id === input._id
        );
        if (exist.quantity === 1) {
            const cartUpdate = cartItems.filter(
                (item: CartItem) => item._id !== input._id
            );
        setCartItems(cartUpdate);
        localStorage.setItem("cartData", JSON.stringify(cartUpdate));
        } else {
            const cartUpdate = cartItems.map((item: CartItem) => 
            item._id === input._id && exist
            ? { ...exist, quantity: exist.quantity - 1 } 
            : item 
        );
        setCartItems(cartUpdate);
        localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
    };

    const onDelete = (input: CartItem) => {
        const cartUpdate = cartItems.filter(
            (item: CartItem) => item._id !== input._id
        );
        setCartItems(cartUpdate);
        localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    };

    const onDeleteAll = () => {
        setCartItems([]);
        localStorage.removeItem("cartData");
    }
    return {
        cartItems,
        onAdd,
        onRemove,
        onDelete,
        onDeleteAll,
    };
};

export default useBasket;