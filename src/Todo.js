//현재 파일에서는 checkBox와 label 컴포넌트를 만들어보자

import { useState } from "react";

let Todo = () => {
    
    const[state,setState] = useState(" ",0);

    return(
        //Html코드가 들어가는 부분
        //속성을 쓸 때 카멜케이스로 작성하기
        //onclick -> onClick
        //class -> className
        <div className = "Todo">
            <input type="checkbox" id="todo0" name="todo0" value="todo0" />
            {/* label 태그는 for 속성에 name값으로 연결해서 어떤 요소와 연결될지 지정 */}
            <label for="todo0">Todo {state} 만들기</label>
        </div>
    )
}

export default Todo;