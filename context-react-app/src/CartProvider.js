import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [item,setItem] = useState([{product:"나옴",qantity:"잘나옴"}])

    //장바구니 재품 추가
    const addItem = (props) =>{
        setItem({
            product:props.item,
            qantity:props.qantity
        })
        console.log(item)
    }

    //장바구니 제품 삭제
    const removeItem = () =>{

    }

    //장바구니 수량 변경
    const updateQuantity = () => {

    }

    //장바구니 초기화
    const clearCart = () =>{

    }

    return(
        <div>
            <CartContext.Provider value={{item,setItem,addItem,removeItem,updateQuantity,clearCart}}>
                {children}
            </CartContext.Provider>
        </div>
    )
}