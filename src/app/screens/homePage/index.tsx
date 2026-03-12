import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css"

export default function HomePage() {

    // 3: SELECTOR: STORE => DATA

  useEffect(() => {
    // 1: BE serverdan JSON formatda DATA qabul qilamiz 

    // 2: SLICE: DATA => STORE

  }, []);
  

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