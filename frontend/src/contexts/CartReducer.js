
const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}
/*
const onAdd = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index > -1) {
      let _cartItems = cartItems;
      _cartItems[index].quantity += 1;
      setCartItems(_cartItems);
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1},
      ]);
    }
  };

*/


export const sumItems = cartItems => {
    Storage(cartItems);

    
    const itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    
    const total = cartItems.reduce((total, product) => total + product.price * product.quantity,0).toFixed(2);
    return { itemCount, total }
}
const INIT_STATE = {
    carts: []
};

export const CartReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            
            
            
                // const ProductExist = cartItems.find(item => item.id === product.id);
                // if (ProductExist) {
                //   setCartItems(
                //     cartItems.map(item =>
                //       item.id === product.id
                //         ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
                //         : item
                //     )
                //   );
                // } else {
                //   setCartItems([...cartItems, { 
                //     ...product, 
                //     quantity: 1  // <-- Change here
                //   }]);
                // }
              
            
            
        //let addedItem = state.cartItems.find(item => item.id === action.payload.id)
           // let existed_item= state.cartItems.find(item=> action.payload.id === item.id)
            // if (state.cartItems.find(item => item.id === action.payload.id)) {
            //     state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++;
                
            //     return {
            //         ...state,
            //         ...sumItems(state.cartItems),
            //         cartItems: [...state.cartItems]
            //     }
            // }
            

            // else {
            //     state.cartItems.push({
            //         ...action.payload
            //     })

             // return {
    //     ...state,
    //     ...sumItems(state.cartItems),
    //     cartItems: [...state.cartItems]
    // }

            const IteamIndex = state.carts.findIndex((item) => item.id === action.payload.id);
                
            if (IteamIndex >= 0) {
                state.carts[IteamIndex].quantity += 1
                return {
                    ...state,
                    carts:[...state.carts]
                }
            }
            else {
                const temp = { ...action.payload, quantity: 1 }
                return {
                    ...state,
                    carts:[...state.carts,temp]
                }
            }

   
//}
        case "REMOVE_ITEM":
            return {
                ...state,
                ...sumItems(state.cartItems.filter(item => item.id !== action.payload.id)),
                cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
            }
        case "INCREASE":
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "DECREASE":
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "CHECKOUT":
            return {
                cartItems: [],
                checkout: true,
                ...sumItems([]),
            }
        case "CLEAR":
                return {
                    cartItems: [],
                    ...sumItems([]),
                }
        default:
            return state

    }
}