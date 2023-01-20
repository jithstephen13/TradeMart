import * as types from "./admin.types";
import axios from "axios"

export const Get_Medicine_data=()=>async(dispatch)=>{
    dispatch({type:types.GET_DATA_LOADING})
    return axios.get(`https://trademart-data-2zur.vercel.app/medicines`)
    .then((res)=>({type:types.GET_MEDICINES_DATA_SUCCESS,payload:res.data}))
    .catch((err)=>({type:types.GET_DATA_ERROR}))

}

// export const Get_Projector_data=()=>async(dispatch)=>{
//     dispatch({type:types.GET_DATA_LOADING})
//     return axios.get(`https://trademart-data-2zur.vercel.app/projector`)
//     .then((res)=>({type:types.GET_PROJECTOR_DATA_SUCCESS,payload:res.data}))
//     .catch((err)=> ({type:types.GET_DATA_ERROR}))

// }


// export const Get_SolarPanel_data=()=>async(dispatch)=>{
//     dispatch({type:types.GET_DATA_LOADING})
//     return axios.get(`https://trademart-data-2zur.vercel.app/solarpanel`)
//     .then((res)=>({type:types.GET_SOLARPANEL_DATA_SUCCESS,payload:res.data}))
//     .catch((err)=> ({type:types.GET_DATA_ERROR}))

// }

