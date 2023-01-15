import axios from "axios";
 

 
export const AddUserApi=async(cread)=>{
  let res= await axios.post(` `,cread)
  return res.data
}