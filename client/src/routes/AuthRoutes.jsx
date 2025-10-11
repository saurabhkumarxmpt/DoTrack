import {Routes,Route} from 'react-router-dom';
import LoginPage from "../pages/Auth/Login";
import Signup from "../pages/Auth/SignUp";

const AuthRoutes=()=>{
    return(
        <>
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<Signup/>} />
        </Routes>
        </>
    )
}
export default AuthRoutes;