import axios from "axios"
export const DeleteProductapi=async()=>{
    let res=await axios.delete(' ')
    return res.data
}

export const AddProductApi=async(cread)=>{
    let res= await axios.post(` `,cread)
    return res.data
}


export const GetProductApi=async()=>{
    let res= await axios.get(` `)
    return res.data
}

export const UpdateProductApi=async(id,chenge)=>{
    let res= await axios.patch(` `,chenge)
    return res.data
}