import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Clock4, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlagIcon } from "@/components/ui/icons";
import { useState } from "react";

interface JobItemProp {
  jobItem: {
    designation: string;
    companyName: string;
    location: string;
    posted: number;
    applicants: number;
    featured: boolean;
  };
}
const JobCard = ({ jobItem }: JobItemProp) => {
  const [fillIcon, setFillIcon] = useState(false);
  return (
    <Card className="2xl:px-5 px-4 py-[0.625rem] gap-[0.9375rem] rounded-[0.625rem] justify-between">
      <div className="flex flex-col gap-[0.3125rem]">
        {jobItem.featured && (
          <span className="text-dark text-[0.625rem] font-semibold">
            Promoted
          </span>
        )}
        <div className="flex items-center gap-[0.625rem]">
          <div className="bg-[#FAFAFA] rounded-[0.625rem] w-10 h-10 flex items-center justify-center">
            <Image src="/teams-logo.png" alt="" width="23" height="22" />
          </div>
          <div>
            <h5 className="text-dark text-sm ">{jobItem.designation}</h5>
            <h5 className="text-dark text-sm leading-none">
              {jobItem.companyName}
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-[0.625rem]">
          <span className="text-muted max-w-[0.75rem] [&_svg]:max-h-[0.75rem] [&_svg]:w-full">
            <MapPin />
          </span>
          <p className="text-[0.75rem] text-muted leading-none">
            {jobItem.location}
          </p>
        </div>
        <div className="flex items-center gap-[0.625rem]">
          <span className="text-muted max-w-[0.75rem] [&_svg]:max-h-[0.75rem] [&_svg]:w-full">
            <Clock4 />
          </span>
          <p className="text-[0.75rem] text-muted leading-none">
            {jobItem.posted} {jobItem.posted > 1 ? "days" : "day"} ago |{" "}
            <span className="text-active">
              {jobItem.applicants}{" "}
              {jobItem.applicants > 1 ? "applicants" : "applicant"}
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Button className="font-normal text-white px-[1.875rem] py-[0.625rem] leading-none text-[0.75rem]">
          Apply Now
        </Button>
        <span
          className="cursor-pointer"
          onClick={() => setFillIcon((prev) => !prev)}
        >
          <FlagIcon fill={fillIcon} />
        </span>
      </div>
    </Card>
  );
};

export default JobCard;
