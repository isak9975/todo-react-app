import { P_info } from "./P_info"


export const Create = () =>{

    // P_info('/product2','POST',)
    const handlecreate = (e) => {
        console.log("handlecreate Run")

        e.preventDefault();
        //e.target -> 이벤트가 일어나는 대상

        // const {value, name} = e.target;
        //구조 분해 할당
        // {value,name} -> 이벤트가 일어나는 대상의 value,name에 들어있는 값을 가져온다


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
                window.location.href='/'
            })

    }

    return(
        <div style={{display:'flex', justifyContent:"center", flexDirection:"column", width:'500px'}}>
            <form noValidate onSubmit={handlecreate} style={{display:'flex', justifyContent:"center", flexDirection:"column"}}>
                <input style={{textAlign:'center'}} autoFocus type="text" name="name" placeholder="상품 이름"/>
                <input style={{textAlign:'center'}} type="number" name="stock" placeholder="    상품 재고"/>
                <input style={{textAlign:'center'}} type="number" name="price" placeholder= "    상품 가격"/>
                <button type="submit">등록</button> 
            </form>
        </div>
    )
}