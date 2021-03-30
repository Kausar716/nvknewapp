import {SIGN_IN_AUTH} from './types';

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
// }
export const authEmailPassword = () => {
    return{
        type :SIGN_IN_AUTH
    }
}
