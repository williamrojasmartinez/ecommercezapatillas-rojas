import { addProduct, removeProduct } from './Types'

const reducer = (state, action) => 
    { 
        const { payload, type } = action; 
            switch (type) 
                { 
                    case addProduct: 
                      const stateTemp = [...state.cart,payload]
                      return { cart: stateTemp }
                    
                         
                    
                    case removeProduct:
                    const result = state.cart.filter(tenis => tenis.id !== payload);
                    return { 
                        ...state,
                        cart: result } 
                    
                    default: return state 
                } 
    } 
                    
export default reducer