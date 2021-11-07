let initialState = {
    PageSize: 2
}
const paginationReducer = (state = initialState ,action) => {
    switch (action.type) {
        case "SET_PAGE_SIZE":{
         return  {
            ...state,
            PageSize: action.PageSize, 
        };
        }
        
        default:
          return state;
     
    }

}

// САНКИ
// export const getWeatherTC = (LocationKey) => {
//   return async (dispatch) =>{
//        let weatherInfo = await API.getWeather(LocationKey);
//          dispatch({type:"SET_WEATHER", weatherInfo});
//     }
// }

export default paginationReducer;