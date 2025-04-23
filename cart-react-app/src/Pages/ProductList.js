import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";

const ProductList = () =>{
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