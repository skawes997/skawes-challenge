import { ADD_ITEM, REMOVE_ITEM,ADD_QTY,SUBS_QTY } from "./cart-constants";

const initialState = {
  cartItem: [],

};

const reducer = (state = initialState, {type,payload}) => {
  // console.log("payload:- ",payload)
  const arr = [...state.cartItem]
const ind = arr.findIndex((elem)=>{
        return elem.id === payload?.id
})
  switch (type) {
    case ADD_ITEM :
      if(ind===-1){
        return {
          ...state,
            cartItem: [...state.cartItem, {...payload,qty:1}],
        }
      }else{
        const {qty} = arr[ind]
       const obj = {...payload,qty:qty+1} 
        arr[ind] = obj
        return {
          ...state,
            cartItem: [...arr],
        }
      }

      case ADD_QTY:
        const {qty} = arr[ind]
        const obj = {...payload,qty:qty+1} 
         arr[ind] = obj
         return {
           ...state,
             cartItem: [...arr],
         }
      case SUBS_QTY:
        if(arr[ind].qty!==0){
          const obj2 = {...payload,qty:arr[ind].qty-1} 
          arr[ind] = obj2
          return {
            ...state,
              cartItem: [...arr],
          }
        }else{
          return state
        }

      case REMOVE_ITEM:
        return{
            ...state,
            cartItem: state.cartItem.splice(payload)
        }
        

    default:
      return state;
  }
};
export default reducer;
