import {v4 as uuidv4} from 'uuid';
import {SIGN_IN_AUTH} from '../actions/types';
// import {getAllImageAssets} from "../";

const initialSatate = {
    items:[
        {
            emailId:"kausarbanu716@gmail.com",
            password:"password123"
        },  
    ],
    loading:false
}
export default function(state = initialSatate, action){
    switch(action.type){

            case SIGN_IN_AUTH:
                return{
                    ...state,
                    items:state.items.filter(item=>item.id != action.payload)

                }
            default:
                return state
    }

}