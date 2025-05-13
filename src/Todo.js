//현재 파일에서는 checkBox와 label 컴포넌트를 만들어보자
import { useState } from "react";
import {ListItem, 
    ListItemText, 
    InputBase, 
    Checkbox, 
    listItemSecondaryAction, 
    IconButton,
    ListItemSecondaryAction} from '@mui/material'
import DeleteOutlined from '@mui/icons-material/DeleteOutlineOutlined'

    //ListItemSecondaryAction
    //ListItem 내부에서 텍스트나 아이콘 이에 보조 액션 영역을 오른쪽 끝에 고정배치해준다.
    //반드시 ListItem의 자식으로만 사용해야한다.

    //IconButton
    //아이콘을 클릭 가능한 버튼으로 만들어주는 컴포넌트이다.

    //DeleteOutlined
    //Mui 아이콘 라이브러리에 포함된 휴지통 아이콘 컴포넌트이다.
   

let Todo = (props) => {

    const editiItem = props.editiItem

    //App.js에서 받은 한가지 할일 목록
    const[item,setItem] = useState(props.item);
    const [readOnly,setReadOnly] = useState(true);

    //true -> false로 바꾸는 trunOffReadOnly함수 추가
    const trunOffReadOnly = () => {
        setReadOnly(false);
        console.log("Active!")
        console.log(readOnly)
    }

  


    //(2)삭제함수
    const deleteItem = props.deleteItem;
    const deleteEventHandler = () => {
        deleteItem(item);
      }

    // //(3)
    // //변경을 감지하는 함수
    // const handleChange = (e) =>{
    //     setItem({
    //         ...item,
    //         title:e.target.value
    //     })
    // }
    const turnOnReadOnly = (e) =>{
        if(e.key=='Enter' && readOnly===false){
            setReadOnly(true); //readOnly true가 읽기만 허용.
            editiItem(item);
        }
    }

      //체크박스 변경함수 
    const checkBoxEventHandler = (e) => {
        item.done = e.target.checked
        editiItem(item);
    }

   
    //내용물을 변경할때(onChange)
    const editEventHandler = (e) =>{
        setItem({...item,title:e.target.value})
    }


    return(
        //Html코드가 들어가는 부분
        //속성을 쓸 때 카멜케이스로 작성하기
        //onclick -> onClick
        //class -> className
        // <div className = "Todo">
        <ListItem>
            <Checkbox  onClick={checkBoxEventHandler} />
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label" : "naked", "readOnly": readOnly}}
                    onClick={trunOffReadOnly}
                    onChange={editEventHandler}
                    onKeyDown={turnOnReadOnly}

                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>

            <ListItemSecondaryAction>
                <IconButton onClick={deleteEventHandler} aria-label="Delete Todo">
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>

        </ListItem>
    )
}


export default Todo;