import * as types from "./product.actiontype"
import { GetProapi } from "./productapi"

export const GetProduct=()=>async(dispatch)=>{
     dispatch({type:types.productGetloading})
    try {
        let data=await GetProapi()
        dispatch({type:types.productGetsuccess,payload:data})
    } catch (error) {
        dispatch({type:types.productGeterorr})
    }

}
export const AddfromProduct=()=>async()=>{

    try {
        
    } catch (error) {
        
    }

}
export const UpdatefromProduct=()=>async()=>{

    try {
        
    } catch (error) {
        
    }

}


export const DeletefromProduct=()=>async()=>{

    try {
        
    } catch (error) {
        
    }

}