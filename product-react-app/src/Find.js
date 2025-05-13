import { useEffect, useState } from "react"
import { P_info } from "./P_info"

export const Find = () => {

    const [item,setItem] = useState([]);

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

    const handleDelete = (e) =>{

        // P_info('/product2','DELETE',e.target.id)
        //      .then(response => {
        //      window.location.href='/'
        //           })
    }

    return(
        <div style={{ display:'flex', alignItems:'center', flexDirection:'column'}}>
            <button type="button" onClick={()=>{window.location.href="/create"}}>상품추가</button>

            <table border={1} style={{borderCollapse:'collapse'}} >
            <tr>
                <th>상품번호</th><th>상품 이름</th><th>상품 재고</th><th>상품가격</th>
                <th>등록 날짜</th><th>수정 날짜</th><th>삭제</th>
            </tr>
                {item.map(items=>{
                    return(
                    <tr style={{border:'1px solid black'}}>
                    <td>{items.id}</td><td>{items.name}</td><td>{items.stock}</td><td>{items.price}</td>
                    <td>{items.createTime}</td><td>{items.updateTime}</td>
                    <td><button id={items.id} onClick={handleDelete}>삭제</button></td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )
}