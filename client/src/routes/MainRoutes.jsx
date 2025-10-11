import {Routes,Route} from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Auth/Login';
import AuthLayout from '../layouts/AuthLayout';

const AppRoutes=()=>{
    return(
        <Routes>
            <Route element={<AuthLayout/>}>
                <Route path='/login' element={<LoginPage/>}/>
            </Route>
        </Routes>
    )
}

export  default AppRoutes;