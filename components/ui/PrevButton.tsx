import { ChevronLeft } from "lucide-react";
import { SwiperButtonProps } from "./NextButton";

const PrevButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
      onClick={() => swiperRef.current?.slidePrev()}
      className="bg-[#1054aa] text-white sm:w-9 w-7 sm:h-9 h-7 flex justify-center items-center rounded-full hover:bg-[#1054aa]/70 transition"
    >
      <ChevronLeft />
    </button>
  );
};

export default PrevButton;
