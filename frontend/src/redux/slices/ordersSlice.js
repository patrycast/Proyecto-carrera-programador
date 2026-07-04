// import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_STATE = {
//     orders: [],
//     error: null,
// }


// const OrdersSlice = createSlice({
//     name: "orders",
//     initialState: INITIAL_STATE,
//     reducers: {
//         errorOrders: (state, action) => {
//             return {
//                 ...state,
//                 error: action.payload,
//             }
//         },
//         getOrders: (state, action) => {
//             return {
//                 ...state,
//                 error: null,
//                 orders:[...action.payload],
//             }
//         },
//         getOrdersFail: (state, action) => {
//             return {
//                 ...state,
//                 error: action.payload,
//             }
//         }
//     }
// });


// export const { errorOrders, getOrders, getOrdersFail } = OrdersSlice.actions;

// export default OrdersSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  orders: [],
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState: INITIAL_STATE,

  reducers: {

    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },

    setOrders: (state, action) => {
      state.orders = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addOrder, setOrders, setError } = ordersSlice.actions;

export default ordersSlice.reducer;