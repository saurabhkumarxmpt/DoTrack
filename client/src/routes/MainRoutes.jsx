import {Routes,Route} from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Auth/Login';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/Home/About';

const AppRoutes=()=>{
    return(

        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<About/>}/>
            </Route>
            <Route element={<AuthLayout/>}>
                <Route path='/login' element={<LoginPage/>}/>
            </Route>
        </Routes>
    )
}

export  default AppRoutes;