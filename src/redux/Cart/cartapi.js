import axios from "axios"

export const AddCartApi=async(cread)=>{
    let res= await axios.post(` `,cread)
    return res.data
}


export const GetCartApi=async()=>{
    let res= await axios.get(` `)
    return res.data
}

export const UpdateCartApi=async(id,chenge)=>{
    let res= await axios.patch(` `,chenge)
    return res.data
}

export const DeleteCartApi=async(id,chenge)=>{
    let res= await axios.delete(` `,chenge)
    return res.data
}