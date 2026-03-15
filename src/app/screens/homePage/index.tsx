import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css"

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setnewDishes, setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";

/* REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({                           //DEFINE
  savePopularDishesToStore: (data: Product[]) => dispatch(setPopularDishes(data)),
  saveNewDishesToStore: (data: Product[]) => dispatch(setnewDishes(data)),
// 1 - (команда)                                   // 2 -  (Action из Redux)
});


export default function HomePage() {
  // 2.1: DBdan olingan "result"ni dispatch orqali yuborish
    const { savePopularDishesToStore, saveNewDishesToStore } = actionDispatch(useDispatch());             //CALL

  useEffect(() => {
    // 1: BEdan JSON formatda DATA qabul qilamiz (BE DATA FETCH)
    const product = new ProductService;

    product.getProducts({
      page: 1,
      limit: 4,
      order: "productViews",
      })
      .then(data => {
        console.log("Data passed here:", data);
        // 2: SLICE: DATA => STORE
        savePopularDishesToStore(data);
      }).catch( (err) => {
        console.log("ERROR", err);
        
      });

    product.getProducts({
      page: 1,
      limit: 4,
      order: "createdAt",
      })
      .then(data => {
        console.log("Data passed here:", data);
        // 2: SLICE: DATA => STORE
        saveNewDishesToStore(data);
      }).catch( (err) => {
        console.log("ERROR", err);
        
      });

    // @ts-ignore
  }, []);  // 4: INTERACTION

  return (
    <div className="homepage">
    <Statistics/>
    <PopularDishes/>
    <NewDishes/>
    <Advertisement/>
    <ActiveUsers/>
    <Events/>
    </div>
  );
}