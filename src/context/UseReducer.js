import { addProduct, removeProduct } from './Types'

const reducer = (state, action) => 
    { 
        const { payload, type } = action; 
            switch (type) 
                { 
                    case addProduct: 
                    const stateTemp = [...state.cart, payload]
                    return { cart: stateTemp } 
                    
                    case removeProduct: 
                    const id = payload.id
                    const result = state.cart.filter(tenis => tenis.id !== id);
                    return { cart: result } 
                    default: return state 
                } 
    } 
                    
export default reducer