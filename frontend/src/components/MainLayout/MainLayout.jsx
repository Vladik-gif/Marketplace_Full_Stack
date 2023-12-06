import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import FormTest from '../FormForTest/FormTest';

// import styles from './MainLayout.module.css';

const MainLayout = () => {
   return (
      <div>
         <Header />
         <Suspense>
            <Outlet />
         </Suspense>
         <FormTest />
         <Footer />
      </div>
   );
};

export default MainLayout;
