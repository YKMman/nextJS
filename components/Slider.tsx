"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Parallax } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

import { TDataMaterial } from "@/types/type"
import Link from "next/link";





const Slider = () => {
    const [data, setData] = useState<TDataMaterial[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const sliderRef = useRef<SwiperRef | null>(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/material')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])

    if (!data) return <p>No data</p>

    if (loading) return <div className="w-[60px] h-[60px] animate-bounce bg-white rounded-full"></div>

    const handlePrev = () => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    };
    
    const handleNext = () => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    };


    return (
        <div className="w-full max-w-[760px] minxl:max-w-full relative">
            <Swiper
            ref={sliderRef}
            speed={600}
            parallax={true}
            spaceBetween={18}
            slidesPerView={'auto'}
            watchOverflow={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="mb-[32px]"
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                el: '.swiper-pagination',
                type: 'progressbar',
                renderProgressbar: function (progressbarFillClass) {
                    return '<span class="' + progressbarFillClass + '"></span>';
                }
            }}
            modules={[Pagination, Autoplay, Parallax]}
            breakpoints={{
                1920: {
                    slidesPerView: 3.5,
                },
                1440: {
                    slidesPerView: 2.5,
                },
                1024: {
                    slidesPerView: 3.1,
                },
                768: {
                    slidesPerView: 5.3,
                },
                360: {
                    slidesPerView: 2.4,
                }
            }}
            >   
                {
                    data.map((el, index) => {
                        return (
                                <SwiperSlide key={index}
                                className="!w-full minlg:!max-w-[193px] lg:!max-w-[128px] !h-fit !relative after:bg-card after:absolute after:left-0 after:top-0 after:right-0 after:bottom-0  rounded-[10px] overflow-hidden"
                                >
                                    <Image src={`/${el.image}.png`} 
                                    layout="responsive"
                                    width={193}
                                    height={344}  
                                    style={{objectFit: 'cover', borderRadius: '10px'}}
                                    className="bg-gradient-linear from-blue-500 to-green-500 shadow-custom"
                                    alt={el.title}/>
                                    <Link href={`/slide/${el.id}`}  className="cursor-pointer absolute bottom-0 left-0 minlg:p-[15px] lg:p-[5px] minlg:text-[19px] lg:text-[15px] font-bold leading-[20px] z-10 md:!text-[12px] md:!p-[10px]">{el.title}</Link>
                                </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className="flex !items-center gap-[12px] justify-end flex-row-reverse">
                <div className="swiper-pagination absolute w-[10px] h-[10px]"></div>
                <div className="flex items-center gap-[15px]">
                    <div className="prev-arrow p-[16px] border-[1px] border-white rounded-full cursor-pointer active:bg-transparent active:border-[#F38600] group" onClick={handlePrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="white" className="group-active:fill-[#F38600]">
                            <path d="M3.3036 6.55597L10.3094 0.171546C10.5393 -0.057182 10.9121 -0.057182 11.142 0.171546C11.3719 0.400256 11.3719 0.771364 11.142 1.00009L4.55865 7.00001L11.1414 12.9999C11.3713 13.2286 11.3713 13.5997 11.1414 13.8285C10.9116 14.0572 10.5387 14.0572 10.3088 13.8285L3.30301 7.44403C3.18048 7.3221 3.12795 7.16045 3.13613 7.00059C3.12852 6.84013 3.18103 6.6785 3.3036 6.55597Z" className="group-active:fill-[#F38600]"/>
                        </svg>
                    </div>
                    <div className="next-arrow p-[16px] border-[1px] border-white rounded-full cursor-pointer active:bg-transparent active:border-[#F38600] group" onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="white" className="group-active:fill-[#F38600]">
                            <path d="M11.6964 6.55597L4.6906 0.171546C4.4607 -0.057182 4.08786 -0.057182 3.85797 0.171546C3.62807 0.400256 3.62807 0.771364 3.85797 1.00009L10.4414 7.00001L3.85855 12.9999C3.62866 13.2286 3.62866 13.5997 3.85855 13.8285C4.08845 14.0572 4.46129 14.0572 4.69116 13.8285L11.697 7.44403C11.8195 7.3221 11.8721 7.16045 11.8639 7.00059C11.8715 6.84013 11.819 6.6785 11.6964 6.55597Z" className="group-active:fill-[#F38600]"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Slider
