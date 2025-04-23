import { createContext,useState} from "react"

//전역컴포넌트 설정
export const ThemeContext = createContext();

//[핵심]전역컴포넌트를 사용한 전달 값 생성 컴포넌트
export const ThemeProvider = ({children}) => {
    
    const [isDarkMode,setIsDarkMode] = useState(children.props.isDarkMode)
    console.log("1",children) //Object
    console.log("2",children.props) //{isDarMode:'true'}
    console.log("3",children.props.isDarkMode) //true
    
    return(
        <div>
            {/* 함수도 보낼수 있음 const toggle = () =>{} */}
            <ThemeContext.Provider value={{isDarkMode,setIsDarkMode}}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}