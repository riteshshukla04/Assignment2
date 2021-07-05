import { action } from "commander";
import { ADD_FACT, DELETE_FACT, LOGIN} from "../actions/type";
import initialState from "./initialstate";


const FactReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_FACT:
            return{
                ...state,
                factlist:state.factlist.concat({
                    key:Math.random(),
                    name:action.data
            })
            };
            case DELETE_FACT:
                return{
                    ...state,
                    factlist:state.factlist.filter((item) =>
                    item.key !== action.key)
                };
            
            case LOGIN:
                return{
                    ...state,
                    isLoggedin:false,
                };
            default:
                    return state;

                
    }
}
export default FactReducer;