//URL 파라미터를 사용하여 다국어 지원을 위한 경로 만들기
//Ex) /:lang/home 으로 언어 코드를 받아서 해당 언어에 맞는 내용을 보여줌
//Ex) /eng/home, /kor/home

import { Link, useParams } from "react-router-dom";

//컴포넌트 이름은 Home
const Home3 = () =>{
    const {lang} = useParams();

    const content = {
        ko: {
          greeting: '안녕하세요!',
          description: '이것은 한국어 페이지입니다.',
        },
        en: {
          greeting: 'Hello!',
          description: 'This is an English page.',
        },
        jp: {
          greeting: 'こんにちは！',
          description: 'これは日本語のページです。',
        },
      };

      const laa = content[lang]

      if(!laa){
        return <div>지원하지 않는 언어</div>
      }

      return(
        <div>
            <h2>{laa.greeting}</h2>
            <h2>{laa.description}</h2>
        </div>
    )
}

//카테고리 컴포넌트
const Categories = () =>{
    const categories = [
        { id: 1, name: '전자제품' },
        { id: 2, name: '의류' },
        { id: 3, name: '식료품' },
        ];

    return(
        <div>
            <h2> 카테고리를 선택하세요</h2>
            {/* 리스트로 만들고 URL로 이동할 수 있는 링크를 생성함
            key에 고유한 값이 들어가는건 맞음.
            li의 값이 변경될 때 react가 구분을 하는 값으로 인식.
            key : 리액트가 리스트를 구분할 수 있는 식별자로 사용함. 
            리액트에게 진짜 변한부분만 재조정할수 있게 하여 성능 향상하기 위함.
            
            key 
            형제 요소내에서 순서가 바뀌거나, 값이 추가되거나, 삭제되거나 할때 리액트는
            바뀌지 않은 요소에 대해서는 굳이 재렌더링을 하지 않는다. 그걸 key를 통해 할수 있다.*/}
            <ul>
                {categories.map(cate=>(
                    <li key={cate.id}
                    ><Link to={`/categories/${cate.id}`}>{cate.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}

//상품목록 컴포넌트
const Products = () =>{
    const {categoriId} = useParams();
    const products = [
        { id: 1, name: '노트북', categoryId: '1' },
        { id: 2, name: '스마트폰', categoryId: '1' },
        { id: 3, name: '셔츠', categoryId: '2' },
        { id: 4, name: '청바지', categoryId: '2' },
        { id: 5, name: '사과', categoryId: '3' },
        { id: 6, name: '우유', categoryId: '3' },
        ];

    return(
        <div>
            <h2>상품을 선택하세요</h2>
            <ul>
                {products.filter(x=>x.categoryId===categoriId).map(pro=>(
                    <li>
                      <Link to={`/categories/${pro.categoryId}/products/${pro.id}`}>{pro.id},{pro.name}</Link>  
                    </li>
                
                ))}
            </ul>
        </div>
    )
}

//상품상세페이지
const ProductDetail = () =>{
    const {categoriId,productId} = useParams();
    console.log(productId);
    const p_detail = [
        { id: 1, name: '노트북', description: '최신형 노트북입니다.', categoryId: '1' },
        { id: 2, name: '스마트폰', description: '최신 스마트폰입니다.', categoryId: '1' },
        { id: 3, name: '셔츠', description: '멋진 셔츠입니다.', categoryId: '2' },
        { id: 4, name: '청바지', description: '편안한 청바지입니다.', categoryId: '2' },
        { id: 5, name: '사과', description: '신선한 사과입니다.', categoryId: '3' },
        { id: 6, name: '우유', description: '신선한 우유입니다.', categoryId: '3' },
        ];

        //filter -> 원하는 조건이 없을 때 빈배열을 반환
        //find -> 못찾으면 undefined
        //const product = p_detail.find(item=>item.id===Number(productId)&&i)
    return(
        <div>
            <h1>상세페이지</h1>
            <h2><p>제품 아이디 : {p_detail[productId-1].id}</p></h2>
            <h2><p>제품 카테고리 번호 : {p_detail[productId-1].categoryId}</p></h2>
            <h2><p>제품 이름 : {p_detail[productId-1].name}</p></h2>            
            <h2><p>상세설명 : {p_detail[productId-1].description}</p></h2>
            
        </div>
    )
    
    

}


export {Home3,Categories,ProductDetail,Products}