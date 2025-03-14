"use client";
import JobCard from "@/components/ui/jobCard";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import NextButton from "@/components/ui/NextButton";
import { useRef } from "react";
import PrevButton from "@/components/ui/PrevButton";

interface JobItem {
  designation: string;
  companyName: string;
  location: string;
  posted: number;
  applicants: number;
  featured: boolean;
}

const JobsPosted = ({
  jobsListing,
  title,
  navigateTo,
}: {
  jobsListing: JobItem[];
  title: string;
  navigateTo: string;
}) => {
  const swiperRef = useRef(null);
  return (
    <div className="flex flex-col gap-[0.9375rem] pb-[1.5625rem] border-b border-[#E9ECEF]">
      <div className="flex justify-between items-center ">
        <div className="flex items-center sm:gap-[0.9375rem] gap-2">
          <h3 className="text-dark sm:text-[18px] text-base">{title}</h3>
          <Link
            className="text-active underline underline-offset-4 sm:text-sm text-[0.75rem]"
            href={navigateTo}
          >
            See {title}
          </Link>
        </div>
        <div className="xl:hidden flex items-center sm:gap-3 gap-1">
          <PrevButton swiperRef={swiperRef} />
          <NextButton swiperRef={swiperRef} />
        </div>
      </div>
      <div className="xl:grid hidden xl:grid-cols-5 grid-cols-4 gap-4">
        {jobsListing.map((Item, index) => (
          <JobCard key={`grid-${index}`} jobItem={Item} />
        ))}
      </div>

      <div className="xl:hidden w-full">
        <div className="xl:!hidden min-w-0">
          <Swiper
            onSwiper={(swiper: any) => (swiperRef.current = swiper)}
            className=""
            slidesPerView="auto"
            spaceBetween={16}
            // navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            modules={[Navigation]}
            autoplay={{ delay: 2500 }}
          >
            {jobsListing.map((Item, index) => (
              <SwiperSlide key={index}>
                <JobCard jobItem={Item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default JobsPosted;
