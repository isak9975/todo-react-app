import { useContext } from "react";
import {Link} from 'react-router-dom'
import { CartContext } from "../context/CartContext";

//제품목록으로 가는 링크, 카트페이지로 가는 링크(제품의 총 개수 - 총 가격)
const Header = () => {
    const {items} = useContext(CartContext);
    //총 개수
    const totalCount = items.reduce((sum,item)=>sum + item.qantity,0);

    //총 가격 reduce((총합,값)=>총합+값,초기값)
    const totalPrice = items.reduce((sum,item)=>sum + item.price*item.qantity,0)

    return(
        <div>
            <Link to="/products">Products</Link> /
            <Link to='/cart'>Cart({totalCount}- {totalPrice}원)</Link>
        </div>
    )
}

export default Header