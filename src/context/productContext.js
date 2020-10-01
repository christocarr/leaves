import { createContext } from "react";
import { productData } from "../productData";

const ProductContext = createContext(productData);

export default ProductContext;
