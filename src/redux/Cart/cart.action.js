import * as types from "./cart.actiontype"
import { AddCartApi, GetCartApi, UpdateCartApi } from "./cartapi"

export const Addtocart=(item)=>async(dispatch)=>{
     dispatch({type:types.CartPostloading})
    try {
        let data=await AddCartApi(item)
        dispatch({type:types.CartPostsuccess,payload:data})


    } catch (error) {
        dispatch({type:types.CartPosterorr})   
    }

}

export const Gettocart=()=>async(dispatch)=>{
    dispatch({type:types.CartGetloading})
    try {
        let data=await GetCartApi()
        dispatch({type:types.CartGetsuccess,payload:data})
    } catch (error) {
        dispatch({type:types.CartGeterorr})    
     }
}

export const Updatecart=(id,chenge)=>async(dispatch)=>{

    dispatch({type:types.CartUpdateloading})
    try {
        let data=await UpdateCartApi(id,chenge)
        dispatch({type:types.CartUpdatesuccess,payload:data})
    } catch (error) {
        dispatch({type:types.CartUpdateerorr})    
     }

}

export const Deletefromcart=()=>async()=>{

    try {
        
    } catch (error) {
        
    }

}