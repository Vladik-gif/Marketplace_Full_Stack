import styles from './Home.module.css';
import SideBar from '../../components/SideBar/SideBar';

import CustomArrows from '../../components/Slide/Slide';
import Slider from '../../ui_reuse/slider/Slider';
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
   return (<>
      <div className={styles.mainContainer}>
         <SideBar />
         <CustomArrows />
      </div>
      <Slider settings={{ type: 'carousel', startAt: 0, perView: 5 }}
         title="Новинки"
         slideSArray={[<ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />]} />
   </>
   );
};

export default Home;
