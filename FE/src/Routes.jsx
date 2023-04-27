import { Routes, Route } from 'react-router-dom';
import Rent from './pages/Rent';
import Payment from './pages/Payment';
import Settings from './pages/Settings';
import Home from './pages/Home';
import SideBar from './SideBar';

const MenuRoutes = () => {
    return(
        <Routes>
            <Route element={<SideBar />} >
                <Route path='/rent' exact element={<Rent />} />
                <Route path='/payment' exact element={<Payment />} />
                <Route path='/settings' exact element={<Settings />} />
            </Route>
            <Route path='/' exact element={<Home />} />
        </Routes>
    )
}

export default MenuRoutes;