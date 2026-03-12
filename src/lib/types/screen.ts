import { Member } from "./member";
import { Product } from "./product";

/* REACT APP STATE */
export interface AppRootState {
    homePage: HomePageState;
}

/* HOMEPAGE (ichidagi malumotlarni Type integration) */
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}

/* PRODUCTS PAGE */

/* ORDERS PAGE */