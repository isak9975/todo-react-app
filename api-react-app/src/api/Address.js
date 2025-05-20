import axios, {Axios} from 'axios'
import {useEffect,useState} from 'react'
import {Navigate} from 'react-router-dom'
import {DaumPostcodeEmbed,loadPostcode,useDaumPostcodePopup} from 'react-daum-postcode'

export const Address = () => {
    const scriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'

    const [detailAddress,setDetailAddress] = useState(); //상세 주소를 저장할 state
    const [postcode,setPost] = useState(''); //우편번호를 저장하는 state
    const [address,setAddress] = useState(''); //주소를 저장할 state
    const [extraAddress,setExtraAddress] = useState('') //참고 항목을 저장할 state
    
    const[swit,setSwit] = useState(false);
    const[showinfo,setShowinfo] = useState("");
    const[item,setItem] = useState([]);

    //훅을 사용하여 주소찾기 API를 팝업으로 실행할 준비
    const open = useDaumPostcodePopup(scriptUrl);


    //버튼을 눌러 팝업창을 연다.
        //onComplete : 우편검색 결과 목록에서 특정 항목을 클릭한 경우, 
        // 해당 정보를 받아서 처리할 콜백 함수를 정의 하는 부분.
    const handleClick=()=>{
        open({onComplete:handleComplete});
    }



    //userSelectedType : 사용자가 선택한 주소 타입에 따라 주소 설정
    //R : 도로명 주소
    //J : 지번 주소



    let extraAddr='';
    let addr = '';    

    //주소 선택 완료 후 실행되는 함수(콜백함수)
        //data에는 주소에 한 내용이 들어온다
    const handleComplete = (data) => {
        //내부에서 data를 가지고 어떤 내용를 파싱할지는 자유
        console.log(data)

        if(data.userSelectedType==='R'){
            addr = data.roadAddress; //도로명 주소 선택시 도로명 주소 할당 해줘
        }else{
            addr = data.jibunAddress; //지번 주소 선택 시 지번 주소 할당
        }

        //참고항목처리(도로명주소인 경우)
        if(data.userSelectedType ==='R'){
            //법정동명이 있는지 확인하고 추가(법정동, 법정리가 있을 때만)
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraAddr += data.bname;
            }
            //건묾여이 있고 공동 주택일 경우 추가
            if(data.buildingName !== ''&&data.apartment==='Y'){
                extraAddr += extraAddr !== '' ? ', '+data.buildingName : data.buildingName
            }

            //참고항목이 있다면 괄호로 감싸서 추가
            if(extraAddr !== ''){
                extraAddr = ` (${extraAddr})`;
            }

            //참고항목 state 업데이트
            setExtraAddress(extraAddr);
        }else{
            //지번 주소인 경우 참고 항목을 빈 문자열로 설정.
            setExtraAddress('');
        }

        setPost(data.zonecode); //우편번호 설정
        setAddress(addr)

        //상세 주소 입력 필드로 포커스 이동하기
        document.querySelector('#sample6_detailAddress').focus();
    }

    const handlesave = () => {

        let user={userId: postcode ,userPassword: postcode ,userEmail: postcode ,userAddress : postcode+address}

        axios.post("http://localhost:10000/address",user)
        .then(res=>{
            console.log(res.data.data)
            setItem(res.data.data)
        })

        handlebutton();

    }

    const handlebutton = () => {
        // console.log("run")
        // console.log(swit)

        setSwit(!swit)

        if(!swit){
            setShowinfo(printinfo);
        }
        else{
            setShowinfo('');
        }
    }

    

    const printinfo = (
       
            <div>
                <h1>출력하기</h1>
                    <ul>
                        {item.map(items=>(
                            <li key={items.id}>{items.id}, {items.userId}, {items.userAddress}</li>
                        ))}
                    </ul>
            </div>
       
    )   

    


    return (
        <div className='form-group' >
            <div className='form-row'>
                우편 주소 : <input
                    type='text'
                    id="sample6_postcode"
                    placeholder='우편번호'
                    value={postcode}
                    readOnly/>
                <input 
                    type='button'
                    onClick={handleClick}
                    value="우편번호 찾기"/>
            </div>
                주소 : <input
                    type='text'
                    id="sample6_address"
                    placeholder='주소'
                    value={address}
                    readOnly/>

            <div className='form-row split'>
                상세주소 : <input 
                    type='text'
                    id="sample6_detailAddress"
                    placeholder='상세주소'
                    value={detailAddress}
                    onChange={(e)=>{setDetailAddress(e.target.value)}} /><br></br>
             참고항목 : <input 
                type='text'
                id="sample6_extraAddress"
                placeholder='참고항목'
                value={extraAddress}
                readOnly/>


            </div>

            <div>
                <input 
                    type='button'
                    value="저장하기"
                    onClick={handlesave}
                    />

                <input 
                    type='button'
                    value="전환하기"
                    onClick={handlebutton}
                    />
            </div>
            <h1>주소 api 사용해보기</h1>
            <div>
                {/* 저장한 값 보여줄 장소 */}
                {showinfo}
            </div>

        </div>        
    )
}