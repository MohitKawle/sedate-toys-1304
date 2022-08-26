 import * as types from './actionTypes';

const initialState={
   
    hotelList:[],
    restaurantList:[],
    places:[],
    sight:[],
    isLoading:false,
    isError:false
}

const reducer=(state=initialState,{type , payload})=>{
   
    switch(type){
       
        case types.HOTEL_LIST_REQUEST:{

            return{ ...state , isLoading:true , isError:false}
        }
        case types.HOTEL_LIST_SUCCESS:{

            return{ ...state , isLoading:false, hotelList:payload , isError:false}
        }
        case types.HOTEL_LIST_FAILURE:{

            return{ ...state , isLoading:false , isError:true }
        }


        case types.PLACES_REQUEST:{

            return{ ...state , isLoading:true , isError:false}
        }
        case types.PLACES_SUCCESS:{

            return{ ...state , isLoading:false, places:payload , isError:false}
        }
        case types.PLACES_FAILURE:{
            return{ ...state , isLoading:false , isError:true }
        }


        case types.RESTAURANTS_LIST_REQUEST:{

            return{ ...state , isLoading:true , isError:false}
        }
        case types.RESTAURANTS_LIST_SUCCESS:{

            return{ ...state , isLoading:false, restaurantList:payload , isError:false}
        }
        case types.RESTAURANTS_LIST_FAILURE:{


            return{ ...state , isLoading:false , isError:true }
        }

        case types.SIGHT_LIST_REQUEST:{
            return{...state , isLoading:true, isError:false}
        }
        
        case types.SIGHT_LIST_SUCCESS:{
            return{...state , isLoading:true, isError:false , sight:payload}
        }
        
        case types.SIGHT_LIST_FAILURE:{
            return{...state , isLoading:false, isError:true}
        }

        default: 
        return state
    }
}
export {reducer}