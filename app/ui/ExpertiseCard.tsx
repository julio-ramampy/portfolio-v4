"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface ExpertiseCardProps {
    title: string;
    content: string[];
    images: string[]
}
const ExpertiseCard:React.FC<ExpertiseCardProps> = ({ title,content, images }) => {
    return (
        <div className="flex-col justify-center mt-5">
            <div className="flex">
                <div className="text-sm bg-gray-500 w-1/2 p-1 text-white">
                    {title}
                </div>
                <div className="text-sm bg-gray-500 w-[1.4rem] h-[1.4rem] text-white rotate-45 mt-[0.2rem] -ml-3">
                
                </div>
            </div>
            {
                content.map((c, index) => (
                    <div className="flex text-[14px] px-1" key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div>{c}</div>
                    </div>
                ))
            }
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                className="rounded-2xl shadow-lg mt-2"
            >
                {images.map((src, i) => (
                <SwiperSlide key={i}>
                    <img
                        src={src}
                        alt={`Slide ${i}`}
                        className="w-full h-64 object-cover rounded-2xl"
                    />
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default ExpertiseCard
