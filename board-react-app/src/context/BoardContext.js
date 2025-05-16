import { useState,createContext, useEffect } from "react";
import { mockData } from "../component/mockData";

export const BoardContext = createContext(null);

export const BoardProvider = ({children}) => {

    useEffect(()=>{},[])

    //mockData를 초기 값으로 지정
    const [boardList,setBoardList] = useState([]);

    return(
        <div>
            <BoardContext.Provider value={{boardList,setBoardList}}>
                {children}
            </BoardContext.Provider>
        </div>
    )
}