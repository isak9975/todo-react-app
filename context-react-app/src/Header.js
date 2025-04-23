import { useContext } from "react"
import { CartContext } from "./CartProvider"
import {Link} from 'react-router-dom'

export const Header = () => {
    const {item,setItem,addItem,removeItem,updateQuantity,clearCart} = useContext(CartContext);

    console.log(useContext(CartContext))
    console.log(item[0].product)
    console.log(item[0].qantity)

    return(
        <div>
            <Link to='/cart'><h2>장바구니</h2></Link>
            <p>총 개수 : {item[0].product}</p>
            <p>총 금액 : {item[0].qantity}</p>
            {/* <h2>{set.item.product}</h2> */}
            {/* <h2>{set[0].qantity}</h2> */}
        </div>
    )
}