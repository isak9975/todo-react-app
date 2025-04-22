import {Home,
    About,
    PostDetail,
    UserProfile,
    Dashboard,
    Overview,
    Settings,
    NotFound,
    Login,
    PrivateRoute} from './Pages'
import { Route,Routes } from 'react-router-dom'

export const Routting = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/users/:id' element={<UserProfile/>}/>

                <Route path='/dashboard' element={<Dashboard />}> {/* 상위 */}
                    <Route path="overview" element={<Overview/>}/> {/* 하위 */}
                    <Route path="settings" element={<Settings />}/> {/* 하위 */}
                </Route>

                {/* <Route path='*' element={<NotFound/>}/> */}
                
                <Route path="/login" element={<Login/>}/>

            </Routes> 
        </div>
    )
}

