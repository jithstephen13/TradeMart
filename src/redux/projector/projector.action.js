import axios from 'axios'
import * as types from './projector.actionTypes'

export const Get_projector_item=()=>async(dispatch)=>{

    dispatch({type:types.GET_projector_LOADING})
    try {
           let respnce=await axios.get(`https://next-backend-orpin.vercel.app/projector`)
           dispatch({type:types.GET_projector_SUCCESS,payload:respnce.data})
    } catch (error) {
        dispatch({type:types.GET_projector_ERROR})

        
    }
    
}

export const ADD_projector_item=(cred)=>async(dispatch)=>{

    dispatch({type:types.ADD_projector_LOADING})
    try {
        let res=await axios.post('https://next-backend-orpin.vercel.app/projector',cred)
        console.log(res.data)
        dispatch({type:types.ADD_projectorT_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.ADD_projector_ERROR})        
    }

}

export const UPDATE_projector_item=(id,chenge)=>async(dispatch)=>{

     dispatch({type:types.UPDATE_projector_LOADING})
    try {
        let res=await axios.patch( `https://next-backend-orpin.vercel.app/projector/${id}`,chenge)
        console.log(res.data)
        dispatch({type:types.UPDATE_projector_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.UPDATE_projector_ERROR})        
    }

}

export const REMOVE_projector_item=(id)=>async(dispatch)=>{
    console.log(id)
    dispatch({type:types.REMOVE_projector_LOADING})
    try {
        let res=await axios.delete( `https://next-backend-orpin.vercel.app/projector/${id}`)
        console.log(res.data)
        dispatch({type:types.REMOVE_projector_SUCCESS,payload:id})
        
    } catch (error) {
        dispatch({type:types.REMOVE_projector_ERROR})        
    }

    
}