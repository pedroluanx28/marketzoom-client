import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import './style.scss'

export function Slide() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className='h-100 d-flex'
        >
            <SwiperSlide><a href="/products"><img src="./Logo.svg"/></a></SwiperSlide>
            <SwiperSlide><a href="/products">Slide 2</a></SwiperSlide>
            <SwiperSlide><a href="/products"><img src="./Logo.svg"/></a></SwiperSlide>
            <SwiperSlide><a href="/products">Slide 2</a></SwiperSlide>
            <SwiperSlide><a href="/products"><img src="./Logo.svg"/></a></SwiperSlide>
            <SwiperSlide><a href="/products">Slide 2</a></SwiperSlide>
            <SwiperSlide><a href="/products"><img src="./Logo.svg"/></a></SwiperSlide>
            <SwiperSlide><a href="/products">Slide 2</a></SwiperSlide>
            <SwiperSlide><a href="/products"><img src="./Logo.svg"/></a></SwiperSlide>
            <SwiperSlide><a href="/products">Slide 2</a></SwiperSlide>
        </Swiper>
    );
}
