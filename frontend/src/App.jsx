import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import SecondPage from './pages/SecondPage/SecondPage.jsx';

//
import FormTest from './components/FormForTest/FormTest.jsx';
import FormForTestWithImage from './components/FormForTestWithImage/FormForTestWithImage.jsx';
//

const App = () => {
   return (
      <Routes>
         <Route path="" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/mobile" element={<SecondPage />} />
            <Route path="/desktop" element={<SecondPage />} />
            <Route path="/foto" element={<SecondPage />} />
            <Route path="/tv" element={<SecondPage />} />
            <Route path="/audio" element={<SecondPage />} />
            <Route path="/game" element={<SecondPage />} />
            <Route path="/tablet" element={<SecondPage />} />
            <Route path="/laptop" element={<SecondPage />} />
            <Route path="/home" element={<SecondPage />} />
            <Route path="/kitchen" element={<SecondPage />} />
            <Route path="/climate" element={<SecondPage />} />
            <Route path="/other" element={<SecondPage />} />
         </Route>
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         {/* // */}
         <Route path="/form" element={<FormTest />} />
         <Route path="/formImage" element={<FormForTestWithImage />} />
      </Routes>
   );
};

export default App;
