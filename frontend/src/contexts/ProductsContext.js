import { createContext, useState } from "react";
import SHOP_DATA from "../shopData";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
        const [products] = useState(SHOP_DATA);

    return (
        <ProductsContext.Provider value={{ products }}>
            { children }
        </ProductsContext.Provider>
    );
}