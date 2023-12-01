import { Component } from 'react';
import Slider from 'react-slick';

import image1 from '../../assets/slide1.jpg';
import image2 from '../../assets/slide2.jpg';
import image3 from '../../assets/slide3.jpg';

import styles from './Slide.module.css';
import { SampleNextArrow } from '../Arrow/SampleNextArrow/SampleNextArrow';
import { SamplePrevArrow } from '../Arrow/SamplePrevArrow/SamplePrevArrow';

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className={styles.slide}>
        <h2 className={styles.slide__title}>ТОП продажів</h2>
        <Slider className={styles.slide__slider} {...settings}>
          <div className={styles.slide__container}>
            <img className={styles.slide__img} src={image1} />
          </div>
          <div className={styles.slide__container}>
            <img className={styles.slide__img} src={image2} />
          </div>
          <div className={styles.slide__container}>
            <img className={styles.slide__img} src={image3} />
          </div>
        </Slider>
      </div>
    );
  }
}
