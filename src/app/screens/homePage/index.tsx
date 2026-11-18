import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css"

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});


export default function HomePage() {
    const { setPopularDishes } = actionDispatch(useDispatch());




    useEffect(() => {
        // Backend server data fetching => Data

        const product = new ProductService();
        product
            .getProducts({
                page: 1,
                limit: 4,
                order: "productViews",
                productCollection: ProductCollection.DISH,
            })
            .then((data) => {
                console.log("typeof:", typeof data, "isArray:", Array.isArray(data));
                console.log("preview:", String(JSON.stringify(data)).slice(0, 200));
                setPopularDishes(Array.isArray(data) ? data : []);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="homepage">
            <Statistics />
            <PopularDishes />
            <NewDishes />
            <Advertisement />
            <ActiveUsers />
            <Events />
        </div>);
}

