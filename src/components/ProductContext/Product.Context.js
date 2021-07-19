import React from "react";
import { useState } from "react";
import { createContext } from "react";
import campaigns from '../../data/campaigns'
export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [budgete, setBudgete] = useState(100000);
  const [products, setProducts] = useState(campaigns);

  return (
    <ProductContext.Provider value={[products, setProducts, budgete, setBudgete]}>
      {props.children}
    </ProductContext.Provider>
  );
};
