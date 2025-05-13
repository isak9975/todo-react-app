import { P_info } from "./P_info"


export const Create = () =>{

    // P_info('/product2','POST',)
    const handlecreate = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        const name = data.get('name');
        const stock = data.get('stock');
        const price = data.get('price');

        console.log(name)
        console.log(stock)
        console.log(price)

        // const dto = new dto({name:name,stock:stock,price:price})

        P_info("/product2","POST",{name:name,stock:stock,price:price})
            .then(response => {
                window.location.href='/create'
            })

    }

    return(
        <div style={{display:'flex', justifyContent:"center", flexDirection:"column"}}>
            <form noValidate onSubmit={handlecreate} style={{display:'flex', justifyContent:"center", flexDirection:"column"}}>
                <input type="text" name="name" placeholder="상품 이름"/>
                <input type="number" name="stock" placeholder="상품 재고"/>
                <input type="number" name="price" placeholder="상품 가격"/>
                <button type="submit">등록</button>
            </form>
        </div>
    )
}