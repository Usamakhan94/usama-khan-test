import { ChevronRight } from "lucide-react";
import SwiperInstance from "swiper";

export interface SwiperButtonProps {
  swiperRef: React.RefObject<SwiperInstance | null>; // Define the type for swiperRef
}

const NextButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
      onClick={() => swiperRef.current?.slideNext()}
      className="bg-[#1054aa] text-white sm:w-9 w-7 sm:h-9 h-7 flex justify-center items-center rounded-full hover:bg-[#1054aa]/70 transition"
    >
      <ChevronRight />
    </button>
  );
};

export default NextButton;
