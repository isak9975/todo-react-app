import { useState,createContext, useEffect } from "react";
import { mockData } from "../component/mockData";

export const BoardContext = createContext(null);

export const BoardProvider = ({children}) => {

    useEffect(()=>{},[])

    const [boardList,setBoardList] = useState(mockData);

    return(
        <div>
            <BoardContext.Provider value={{boardList,setBoardList}}>
                {children}
            </BoardContext.Provider>
        </div>
    )
}