import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useDispatch, useSelector } from "react-redux";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { Product, ProductInquiry } from "../../../lib/types/product";
import { retrieveProducts } from "./selector";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";

/* REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({                           //DEFINE
  saveProductsToStore: (data: Product[]) => dispatch(setProducts(data)),
// 1 - (команда)                                   // 2 -  (Action из Redux)
});

const productRetriever = createSelector(
  retrieveProducts, 
  ( products ) => products
);

export default function Products() {
    const { basket } = useGlobals();
    const { onAdd } = basket;
    const { saveProductsToStore } = actionDispatch(useDispatch());
    const products = useSelector(productRetriever)
    const [productSearch, setProductSearch ] = useState<ProductInquiry>({
        page: 1,
        limit: 8,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
        search: "",
    })

    const [searchText, setSearchText] = useState("")
    const history = useHistory();

    useEffect(() => {
     const product = new ProductService();
     product
     .getProducts(productSearch)
     .then((data) => saveProductsToStore(data))
     .catch(err => console.log(err));
     
    }, [productSearch])

    useEffect(() => {
        if(searchText === "") {
            productSearch.search = "";
            setProductSearch({ ...productSearch });
        }
    }, [searchText])
    
    useEffect(() => {
        productSearch.search = searchText;
        setProductSearch({ ...productSearch });
  }, [searchText]);
    /* HANDLERS */

    const searchCollectionHandler = (productCollection: ProductCollection) => {
        setProductSearch({ 
            ...productSearch, 
            page: 1, 
            productCollection 
        } );
    };

    const searchOrderHandler = (order: string) => {
        productSearch.page =1;
        productSearch.order = order;
        setProductSearch({ ...productSearch });
    };

    const searchProductHandler = () => {
        productSearch.search = searchText;
        setProductSearch({ ...productSearch });
    }

    const paginationHandler = (e: ChangeEvent<any>, value: number) => {
        productSearch.page = value;
        setProductSearch({ ...productSearch });
    }

    const chooseDishHandler = (id: string) => {
        history.push(`/products/${id}`);
    }
    return (
        <div className="products">
            <Container>
                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Stack className="avatar-big-box">
                        <Stack className="top-text">
                            <p>Burak Restaurant</p>
                            <Stack className="single-search-big-box">
                                <input 
                                    type={"search"} 
                                    className="single-search-input"
                                    name="singleResearch"
                                    placeholder="Type here"
                                    value={searchText}
                                    onChange={ (e) => setSearchText(e.target.value)}    
                                    onKeyDown={(e) => {
                                        if(e.key === "Enter") searchProductHandler();
                                    }}                            
                                />                              
                                <Button className="single-button-search"
                                        variant="contained"
                                        color="primary"
                                        endIcon={<SearchIcon />}
                                        onClick={searchProductHandler}
                                >
                                    Search
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack className="dishes-filter-section">
                        <Stack className="dishes-filter-box">
                            <Button
                                variant="contained"
                                color={ productSearch.order === "createdAt" ? "primary" : "secondary" }
                                className="order"
                                onClick={() => searchOrderHandler("createdAt")}
                            >
                                New
                            </Button>
                            <Button
                                variant="contained"
                                color={ productSearch.order === "productPrice" ? "primary" : "secondary" }
                                className="order"
                                onClick={() => searchOrderHandler("productPrice")}
                            >
                                Price
                            </Button>
                            <Button
                                variant="contained"
                                color={ productSearch.order === "productViews" ? "primary" : "secondary" }
                                className="order"
                                onClick={() => searchOrderHandler("productViews")}
                            >
                                Views
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack className="list-category-section">
                        <Stack className="product-category">
                            <div className="category-main">
                                <Button
                                    variant="contained"
                                    color={ productSearch.productCollection === ProductCollection.OTHER ? "primary" : "secondary" }
                                    onClick={ () => searchCollectionHandler(ProductCollection.OTHER)}
                                >
                                    OTHER
                                </Button>
                                <Button
                                    variant="contained"
                                    color={ productSearch.productCollection === ProductCollection.DESERT ? "primary" : "secondary" }
                                    onClick={ () => searchCollectionHandler(ProductCollection.DESERT)}
                                >
                                    DESSERT
                                </Button>
                                <Button
                                    variant="contained"
                                    color={ productSearch.productCollection === ProductCollection.DRINK ? "primary" : "secondary" }
                                    onClick={ () => searchCollectionHandler(ProductCollection.DRINK)}
                                >
                                    DRINK
                                </Button>
                                <Button
                                    variant="contained"
                                    color={ productSearch.productCollection === ProductCollection.SALAD ? "primary" : "secondary" }
                                    onClick={ () => searchCollectionHandler(ProductCollection.SALAD)}
                                >
                                    SALAD
                                </Button>
                                <Button
                                    variant="contained"
                                    color={ productSearch.productCollection === ProductCollection.DISH ? "primary" : "secondary" }
                                    onClick={ () => searchCollectionHandler(ProductCollection.DISH)}
                                >
                                    DISH
                                </Button>
                            </div>
                        </Stack>
                        <Stack className="product-wrapper">
                            {products.length !== 0 ? (
                                products.map((product: Product) => {
                                    const imagePath = `${serverApi}/${product.productImages[0]}`
                                    const sizeVolume = product.productCollection === ProductCollection.DRINK 
                                    ? product.productVolume + " litre" 
                                    : product.productSize + " size"
                                    return (
                                        <Stack 
                                            key={product._id} 
                                            className="product-card"
                                            onClick={ () => chooseDishHandler(product._id)}    
                                        >
                                            <Stack 
                                                className="product-img"
                                                sx={{backgroundImage: `url(${imagePath})`}}
                                            >
                                                <div className="product-sale">{sizeVolume}</div>
                                                <Button 
                                                    className="shop-btn"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onAdd({
                                                            _id: product._id,
                                                            quantity: 1,
                                                            name: product.productName,
                                                            price: product.productPrice,
                                                            image: product.productImages[0],
                                                        });
                                                    }}
                                                >
                                                    <img 
                                                        src="/icons/shopping-cart.svg"
                                                        style={{display: "flex"}}
                                                        alt=""
                                                    />
                                                </Button>
                                                <Button className="view-btn" sx={{right: "36px"}}>
                                                    <Badge badgeContent={20} color="secondary">
                                                        <RemoveRedEyeIcon 
                                                            sx={{
                                                                color: product.productViews === 0 ? "gray" : "white",
                                                            }}
                                                        />
                                                    </Badge>
                                                </Button>        
                                            </Stack>
                                            <Box className="product-desc">
                                                <span className="product-title">
                                                    {product.productName}
                                                </span>
                                                <div className="product-desc">
                                                    <MonetizationOnIcon />
                                                    {product.productPrice}
                                                </div>                    
                                            </Box>
                                        </Stack>
                                    );
                                })
                            ) : (
                                <Box className="no-data">Products are not available!</Box>
                            )}
                        </Stack>
                    </Stack>

                    <Stack className="pagination-section">
                        <Pagination 
                            count={products.length !== 0 
                                ? productSearch.page + 1 
                                : productSearch.page}
                            page={productSearch.page}
                            renderItem={(item) => (
                                <PaginationItem 
                                slots={{
                                    previous: ArrowBackIcon,
                                    next: ArrowForwardIcon,
                                }}
                                {...item}
                                color="secondary"
                                />
                            )}
                            onChange={paginationHandler}
                        />
                    </Stack>
                </Stack>
            </Container>

            <div className="brands-logo">
                <Container className="family-brands">
                    <Box className="category-title">Our Family Brands</Box>
                    <Stack className="brand-list">
                        <Box className="review-box">
                            <img src="/img/sweets.webp"/>
                        </Box>
                        <Box className="review-box">
                            <img src="/img/doner.webp"/>
                        </Box>
                        <Box className="review-box">
                            <img src="/img/gurme.webp"/>
                        </Box>
                        <Box className="review-box">
                            <img src="/img/seafood.webp"/>
                        </Box>
                    </Stack>
                </Container>
            </div>

            <div className="address">
                <Container>
                    <Stack className="address-area">
                        <Box className="title">Our address</Box>
                        <iframe 
                            style={{marginTop: "60px"}}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.849690393099!2d129.1204697868891!3d35.15232576931275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ed2f27c70ec7%3A0xff6df0e14d9216fb!2sGwangalli%20Beach!5e0!3m2!1sru!2skr!4v1771689059539!5m2!1sru!2skr"
                            width={"1320"}
                            height={"500"}
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </Stack>
                </Container>
            </div>
        </div>
    );
}