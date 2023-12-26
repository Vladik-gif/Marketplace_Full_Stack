import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import SecondPage from './pages/SecondPage/SecondPage.jsx';
import ThirdPage from './pages/ThirdPage/ThirdPage.jsx';
import FourthPage from './pages/FourthPage/FourthPage.jsx';
//
import FormTest from './components/FormForTest/FormTest.jsx';
import FormForTestWithImage from './components/FormForTestWithImage/FormForTestWithImage.jsx';
import Mobile from './components/Routes/Mobile.jsx';
import Desktop from './components/Routes/Desktop.jsx';
import Foto from './components/Routes/Foto.jsx';
import Tv from './components/Routes/Tv.jsx';
import Audio from './components/Routes/Audio.jsx';
import Game from './components/Routes/Game.jsx';
import Tablet from './components/Routes/Tablet.jsx';
import Laptop from './components/Routes/Laptop.jsx';
import ForHome from './components/Routes/Home.jsx';
import Kitchen from './components/Routes/Kitchen.jsx';
import Climate from './components/Routes/Climate.jsx';
import ChargingStation from './components/Routes/Chargingstation.jsx';
//

const App = () => {
   return (
      <Routes>
         <Route path="" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/mobiles/*" element={<Mobile />} />
            <Route path="/desktops/*" element={<Desktop />} />
            <Route path="/foto/*" element={<Foto />} />
            <Route path="/tvs/*" element={<Tv />} />
            <Route path="/audio/*" element={<Audio />} />
            <Route path="/games/*" element={<Game />} />
            <Route path="/tablets/*" element={<Tablet />} />
            <Route path="/laptops/*" element={<Laptop />} />
            <Route path="/home/*" element={<ForHome />} />
            <Route path="/kitchen/*" element={<Kitchen />} />
            <Route path="/climate/*" element={<Climate />} />
            <Route path="/charging_stations/*" element={<ChargingStation />} />
         </Route>
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />

         <Route path="/form" element={<FormTest />} />
         <Route path="/formImage" element={<FormForTestWithImage />} />

         <Route path="/fourthPage" element={<FourthPage />} />
      </Routes>
   );
};

export default App;
