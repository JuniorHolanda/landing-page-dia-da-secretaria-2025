// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperProps } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ReactNode } from 'react';

interface MySwiperProps extends SwiperProps {
    slides: ReactNode[];
}

export default function Slider({ slides }: MySwiperProps) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
        </Swiper>
    );
};