
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Slide() {
  const huyit = [
    {
      id: 1,
      imgUrl: 'https://sixdo.vn/images/banners/resized/ngang-to-copy-1655273441.jpg',
    },
    {
      id: 2,
      imgUrl: 'https://sixdo.vn/images/banners/resized/ngang-to-1661502983.jpg',
    },
    {
      id: 3,
      imgUrl: 'https://sixdo.vn/images/banners/resized/ngang-to-1654823812.jpg',
    },
    {
      id: 4,
      imgUrl: 'https://sixdo.vn/images/banners/resized/ngang-to--1663124461.jpg'
    }
  ]
  const slider = {
    width: '100%'
  }
  return (
    <>
      <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
      }} pagination={{
        "clickable": true
      }} navigation={true} className="mySwiper">
        {huyit.map((item) => (
          <SwiperSlide>
            <img style={slider} src={item.imgUrl} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}