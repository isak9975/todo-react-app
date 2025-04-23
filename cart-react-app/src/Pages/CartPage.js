import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartPage = () => {
    const {items,removeItem,updateQantity,clearCart} = useContext(CartContext);

    return(
        <div>
            <h1>장바구니</h1>
            {items.length === 0?(<p>장바구니가 비어있습니다.</p>):(
                <div>
                    <ul>
                        {items.map(item=>(
                            <li key= {item.id} style={{marginBottom:10}}>
                                {item.name} - {item.price}원{' '}
                                <input
                                    type="number"
                                    min="1"
                                    value={item.qantity}
                                    onChange={(e)=>updateQantity(item.id,Number(e.target.value))}
                                    style={{width:50,margin:'0 10px'}}
                        />
                        <button onClick={() => removeItem(item.id)}>삭제</button>

                        
                            </li>
                        ))}
                    </ul>
                    <button onClick={clearCart}>장바구니 비우기</button>
                </div>
                )}

                
        </div>
    )
}

export default CartPage;