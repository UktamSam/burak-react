import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import "../../../css/products.css"
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";


export default function ProductsPage() {
  const { basket } = useGlobals();
  const { onAdd } = basket;
  const products = useRouteMatch();
  console.log("products:", products);
  
  return (
    <div className="products-page">
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChosenProduct />
        </Route>
        <Route path={`${products.path}`}>
          <Products />
        </Route>
      </Switch>
    </div>  
  ) 
}