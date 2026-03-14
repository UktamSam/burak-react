import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css"
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/* REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({                           //DEFINE
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

const popularDishesRetriever = createSelector(
  retrievePopularDishes, 
  (popularDishes) => ({ popularDishes })
);

export default function HomePage() {
  // 2.1: DBdan olingan "result"ni dispatch orqali yuborish
    const { setPopularDishes } = actionDispatch(useDispatch());             //CALL
    const {popularDishes} = useSelector(popularDishesRetriever);
    // 3: SELECTOR: STORE => DATA

  useEffect(() => {
    // 1: BEdan JSON formatda DATA qabul qilamiz (BE DATA FETCH)
      const result = [
    {
        "_id": "698a03cc4c60d82b4260f84d",
        "productStatus": "PROCESS",
        "productCollection": "DISH",
        "productName": "Shaurma",
        "productPrice": 6,
        "productLeftCount": 44,
        "productSize": "LARGE",
        "productVolume": 1,
        "productDesc": "Delicious!",
        "productImages": [
            "uploads/products/bff541ef-6ae1-463f-9cd7-828426702744.jpeg"
        ],
        "productViews": 0,
        "createdAt": "2026-02-09T15:57:00.087Z",
        "updatedAt": "2026-02-09T16:19:38.665Z",
        "__v": 0
    },
    {
        "_id": "6989feff4c60d82b4260f83a",
        "productStatus": "PROCESS",
        "productCollection": "DISH",
        "productName": "KEBAB",
        "productPrice": 15,
        "productLeftCount": 99,
        "productSize": "NORMAL",
        "productVolume": 1,
        "productDesc": "Bon Appetitto!",
        "productImages": [
            "uploads/products/86e19741-a2fa-42c5-a52d-68d6b0a45e58.jpg",
            "uploads/products/c2fc56cf-3360-49e7-be7d-31110cf7b150.jpg",
            "uploads/products/289f0d06-7d89-41bf-a5f5-ee0de9b8e4d7.jpg",
            "uploads/products/e2fef62a-5fe3-4bbb-bfbf-c4f546fb0110.png"
        ],
        "productViews": 0,
        "createdAt": "2026-02-09T15:36:31.889Z",
        "updatedAt": "2026-02-09T16:18:22.338Z",
        "__v": 0
    },
    {
        "_id": "6983615640dc2d5ec07b1535",
        "productStatus": "PROCESS",
        "productCollection": "DISH",
        "productName": "Karam Shorva",
        "productPrice": 8,
        "productLeftCount": 54,
        "productSize": "SMALL",
        "productVolume": 1,
        "productDesc": "",
        "productImages": [
            "uploads/products/6582ad8c-8ff9-456b-8261-a1c7f971b2eb.jpg",
            "uploads/products/24b5d426-f76d-4865-bb06-56d9a240d9af.jpg"
        ],
        "productViews": 1,
        "createdAt": "2026-02-04T15:10:14.682Z",
        "updatedAt": "2026-03-03T12:49:11.825Z",
        "__v": 0
    }
]
    // 2: SLICE: DATA => STORE
    // @ts-ignore
    setPopularDishes(result);
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