import { ADD_FACT, DELETE_FACT, LOGIN } from "./type"


export const addfact=(fact)=>(
    {
        type:ADD_FACT,
        data:fact,
    }
);

export const deletefact=(key)=>(
    {
        type:DELETE_FACT,
        key:key,
    }
);
export const login=(isLoggedin)=>(
    {
        type:LOGIN,
        isLoggedin:isLoggedin,
    }
);