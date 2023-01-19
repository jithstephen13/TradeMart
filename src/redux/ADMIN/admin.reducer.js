
import * as types from "./admin.types"


const adminInitState={
    isLoading:false,
    isError:false,
    data:[]
}

const AdminReducer=(state=adminInitState,{type,payload})=>{
    switch(type){
        case types.GET_DATA_LOADING:{
            return{
                ...state,
                isLoading:true
            }
        }
        case types.GET_DATA_ERROR:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case types.GET_MEDICINES_DATA_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:payload
            }
        }
        // case types.GET_PROJECTOR_DATA_SUCCESS:{
        //     return{
        //         ...state,
        //         isLoading:false,
        //         isError:false,
        //         data:payload
        //     }
        // }
        // case types.GET_SOLARPANEL_DATA_SUCCESS:{
        //     return{
        //         ...state,
        //         isLoading:false,
        //         isError:false,
        //         data:payload
        //     }
        // }

        default:{
            return state
        }
    }

}

export default AdminReducer;