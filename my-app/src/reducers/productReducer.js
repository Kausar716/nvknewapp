import {v4 as uuidv4} from 'uuid';
import {GET_PRODUCT_ITEMS,GET_CATEGORY_FILTER_PRODUCT_ITEMS,GET_PAGINATION_DATA,GET_ADD_PRODUCT_PAGE} from '../actions/types';
// import {getAllImageAssets} from "../";

const initialSatate = {
    listData:[
        {
            id:uuidv4(),
            status:"Active",
            productName:"Bent weeding fork-2-line long handle",
            location:"canada",
            category:"Fork 1",
            onWebsite:true,
            sub_category:"Sub Fork 1"

        },
        {
            id:uuidv4(),
            status:"Inactive",
            productName:"Bent weeding fork-2-line long handle 1",
            location:"canada",
            category:"Fork 2",
            onWebsite:false,
            sub_category:"Sub Fork 2"
        },
        {
            id:uuidv4(),
            status:"Inactive",
            productName:"Bent weeding fork-2-line long handle 2",
            location:"canada",
            category:"Fork 2",
            onWebsite:false,
            sub_category:"Sub Fork 2"
        },
        {
            id:uuidv4(),
            status:"Inactive",
            productName:"Bent weeding fork-2-line long handle 3",
            location:"canada",
            category:"Fork 2",
            onWebsite:false,
            sub_category:"Sub Fork 2"
        },
        {
            id:uuidv4(),
            status:"Inactive",
            productName:"Bent weeding fork-2-line long handle 4",
            location:"canada",
            category:"Fork 2",
            onWebsite:false,
            sub_category:"Sub Fork 2"
        },
        {
            id:uuidv4(),
            status:"Inactive",
            productName:"Bent weeding fork-2-line long handle 5",
            location:"canada",
            category:"Fork 2",
            onWebsite:false,
            sub_category:"Sub Fork 2"
        },
        {
            id:uuidv4(),
            status:"Inactive",
            productName:"Bent weeding fork-2-line long handle 6",
            location:"canada",
            category:"Fork 2",
            onWebsite:false,
            sub_category:"Sub Fork 2"
        },
        {
            id:uuidv4(),
            status:"Inactive",
            productName:"Bent weeding fork-2-line long handle 7",
            location:"canada",
            category:"Fork 2",
            onWebsite:false,
            sub_category:"Sub Fork 2"
        },
        {
            id:uuidv4(),
            status:"Inactive",
            productName:"Bent weeding fork-2-line long handle 7",
            location:"canada",
            category:"Fork 2",
            onWebsite:false,
            sub_category:"Sub Fork 2"
        },      {
            id:uuidv4(),
            status:"Inactive",
            productName:"Bent weeding fork-2-line long handle 7",
            location:"canada",
            category:"Fork 2",
            onWebsite:false,
            sub_category:"Sub Fork 2"
        },
    
      
    ],
    loading:false,
    productList:[],
    productPerPage:3,
    pagesVisted:0,
    pageCount:0,
    pageToOpen:"general"

}

export default function(state = initialSatate, action){
    switch(action.type){
        case GET_PRODUCT_ITEMS:
            return{
                ...state,
                productList:state.listData
            }
            // case GET_ITEMS:
            //     return{
            //         ...state,
            //         items:action.payload,
            //         loading:false
            //     }
            case GET_CATEGORY_FILTER_PRODUCT_ITEMS:
                return{
                    ...state,
                    productList:state.listData.filter(product=>product.category == action.payload.category && product.sub_category == action.payload.sub_category

                    )}
            case GET_PAGINATION_DATA:
                    return{
                        ...state,
                        pageCount:action.payload,
                    
        
                    }
                    case GET_ADD_PRODUCT_PAGE:
                        console.log(action.payload)
                        return{
                            ...state,
                            pageToOpen:action.payload,
                        
            
                        }
            //     case ADD_ITEM:
            //     return{
            //         ...state,
            //         items:[action.payload, ...state.items]

            //     }
            //     case ITEMS_LOADING:
            //         return{
            //             ...state,
            //             loading:true
    
            //         }
            default:
                return state
    }

}