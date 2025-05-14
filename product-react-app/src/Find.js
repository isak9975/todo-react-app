import { useEffect, useState } from "react"
import { P_info } from "./P_info"
import './style.css'
import { Create } from "./Create";

export const Find = () => {

    //상품정보름 담는 useState
    const [item,setItem] = useState([]);

    //추가 창을 띄우는 state
    const [open,setOpen] = useState(true);

    //라디오버튼의 index를 저장하는 state
    const [selectedIndex,setSeletedIndex] = useState(null);

    //주문개수를 저장하는 state
    const [orderCount,setOrderCount] = useState('');

    useEffect(()=>{
        console.log('find.js')
        P_info('/product2','GET')
            .then(response =>{
                setItem(response.data)
            })
            .catch(error =>{
                console.log(error)
            })
    },[])

    const onButtonClick = () => {
        setOpen(!open);
    }

    let addButton = <button type="button" onClick={onButtonClick}>상품추가</button>;

    let addproductScreen = <Create/>

    let addProduct = Create;

    if(!open){
        addProduct = addproductScreen;
    }

    const handleDelete = (e) =>{

        P_info('/product2','DELETE',{id:e.target.id})
                .then(response => {
                window.location.href='/'
                    })
    }

    //클릭한 라디오 버튼의 index
    const handleRadioChange = (index) => {
        setSeletedIndex(index);
    }

    const handleOrderCountChange = (e) => {
        setOrderCount(e.target.value)
    }

    const orderProduct = () =>{
        console.log("orderProduct Run")
        console.log(selectedIndex)

        console.log(orderCount)

        if(selectedIndex && orderCount >0 ){
            const orderData = {
                productId : item[0].id,
                productCount : parseInt(orderCount)
            }

            P_info("/orders","POST",orderData)
                .then(result => {
                    window.location.href="/";
                })
        }
    }


    return(
        
        <div className="container" style={{ display:'flex', alignItems:'center', flexDirection:'column'}}>
            
            {addProduct}

            <button type="button" onClick={onButtonClick}>{open==true?"상품추가":" 닫 기 "}</button>

            <table border={1} style={{borderCollapse:'collapse'}} >
            <tr style={{backgroundColor : 'gray' , border : '1px black solid'}}>
                <th>단일선택</th><th>주문개수</th><th>상품번호</th><th>상품 이름</th><th>상품 재고</th><th>상품가격</th>
                <th>등록 날짜</th><th>수정 날짜</th><th>삭제</th><th>수정</th>
            </tr>
                {item.map((items,index)=>{
                    return(
                        
                    <tr style={{border:'1px solid black'}} key={items.id}>
                    {/* 클릭한 index를 받아서 checked에 true 여부 하기,
                        + 하나만 선택되기 하기
                        + 미리 만들어진거라 cheched 수정안되는데 useState 사용해서 변경가능하게 만들기. */}
                    <td><input checked={selectedIndex===index+1} type="radio" name="productId" onChange={()=>{
                        handleRadioChange(index+1)
                    }}/></td>

                    <td><input onChange={handleOrderCountChange} readOnly={selectedIndex !== index+1} 
                    type="number" name="productCount" value={selectedIndex===index+1?orderCount:""}/></td>

                    <td>{items.id}</td><td>{items.name}</td><td>{items.stock===0?"재고소진":items.stock}</td>
                    <td>{items.stock===0?"재고소진":items.price}</td>

                    <td>{items.createTime}</td><td>{items.updateTime}</td>
                    <td><button id={items.id} onClick={handleDelete}>삭제</button></td>
                    <td><button id={items.id} >수정</button></td>

                    </tr>
                    )
                })}
            </table>
                <div>
                    <button type="button" onClick={orderProduct} id="order-done">주문 완료</button>
                    <button type="button" id="order-list">주문 내역</button>
                </div>
        </div>
    )
}