import CartContext from "./cart-context";
import { useReducer } from "react";
const defaultCartState={
  items:[],
  totalAmout:0
};
const cartReducer=(state,action)=>{
if(action.type=="ADD"){
const updatedItems=state.items.concat(action.item);
const updateTotalAmount=state.totalAmout+action.item.price*action.item.amount;
return {
  item:updatedItems,
  totalAmout:updateTotalAmount
};
}
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);
  const addItemToCartHandle = (item) => {

dispatchCartAction({type:"ADD",item:item});
  };
  const removeItemFromCartHandle = (id) => {

    dispatchCartAction({type:"REMOVE",id:id})
  };
  const cartContext = {
    items: [],
    totalAmout: 0,
    addItem: addItemToCartHandle,
    removeItem: removeItemFromCartHandle,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
