import { createSelector } from "reselect";
import { AppRootState, OrdersPageState } from "../../../lib/types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;
export const retrievePopularDishes = createSelector(
    selectOrdersPage,
    (ordersPage: OrdersPageState) => ordersPage.pausedOrders
);

export const retrieveNewDishes = createSelector(
    selectOrdersPage,
    (ordersPage: OrdersPageState) => ordersPage.processOrders
);

export const retrieveTopUsers = createSelector(
    selectOrdersPage,
    (ordersPage: OrdersPageState) => ordersPage.finishedOrders
);
