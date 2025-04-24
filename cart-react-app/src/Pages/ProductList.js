import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";


//제품목록을 보여주는 페이지
//제품이름 - 단가
//개수를 조절하는 input
//장바구니에 추가하기 버튼(state즉시 반영)
const ProductList = () =>{

    //추가하는 함수를 받아서 사용
    const {addItem} = useContext(CartContext);

    return(
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(item =>(
                    <li key={item.id} style={{marginBottom:10}}>
                        {item.name} - {item.price}원{' '}
                    <button onClick={()=>{addItem(item)}}>장바구니에 담기</button>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList