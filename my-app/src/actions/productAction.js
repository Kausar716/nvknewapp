// import axios from 'axios'
import {GET_PRODUCT_ITEMS,GET_CATEGORY_FILTER_PRODUCT_ITEMS,GET_PAGINATION_DATA,GET_ADD_PRODUCT_PAGE} from './types';

// export const getItems = () => dispatch => {
//     dispatch(setItemsLoading());
//     axios
//     .get("/api/items")
//     .then(res=>
//         dispatch({
//             type:GET_ITEMS,
//             payload:res.data

//         })
        
//     )
// }filterDataByCategory
export const getProductItems = () => {
    return{
        type : GET_PRODUCT_ITEMS
    }
}

export const filterDataByCategory = filterData =>{
    console.log(filterData)
    return{
        type : GET_CATEGORY_FILTER_PRODUCT_ITEMS,
        payload:filterData
    }
}

export const getPageWiseData = pageCount =>{
    return{
        type : GET_PAGINATION_DATA,
        payload:pageCount
    }
}
export const getProductPage = pageType =>{
    console.log("hi" +pageType)
    return{
        type : GET_ADD_PRODUCT_PAGE,
        payload:pageType
    }
}


// export const addItem = item =>{
//     return{
//         type : ADD_ITEM,
//         payload : item
//     }
// }
// export const setItemsLoading = item =>{
//     return{
//         type : ITEMS_LOADING,
       
//     }
// }