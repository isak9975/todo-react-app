import { createContext, useState } from "react"
import { products } from "../data/products";

export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const[items,setItems] = useState([]);

    //추가하기
    //js에서 객체에 없는 프로퍼티를 쓰면 객체에 추가가된다.(자동 add)
    const addItem = (products) => {
        setItems((prevItems) => {

            //이미 추가가된 상태라면 개수만 +1
            const exist = prevItems.find(item => item.id === products.id);
            if(exist){
                return prevItems.map(item =>
                    item.id === products.id ? {...item,qantity:item.qantity+1} : item
                )
            }

            //배열에 제품 추가하기.
            return [...prevItems, {...products,qantity:1}]
        })
    }

    //삭제하기
    const removeItem = (id) => {
        //매개변수로 넘어온 아이디 배열에서 일치하지 않는 아이디만 필터링
        setItems(preItems => preItems.filter(item=>item.id !== id));
    }

    //수정하기
    const updateQantity = (id, qantity) => {
        setItems(prevItems => 
            //배열에서 매개변수로 넘어온 id랑 일치하는 요소를 찾아서 
            //매개변수로 넘어온 qantity와 1을 비교해서 더 큰수를 반환
            //원래값과 입력값의 최대값을 찾아서 넣어준다.
            prevItems.map(item=>
                item.id === id ? {...item,qantity:Math.max(1,qantity)} : item
            )
        )
    }

    //장바구니 비우기
    const clearCart = () => {
        setItems([]);
    }

    return(
        <div>
            <CartContext.Provider value={{items,addItem,removeItem,updateQantity,clearCart}}>
                {children}
            </CartContext.Provider>

        </div>
    )

}