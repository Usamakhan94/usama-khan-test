import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface UserDetailsProps {
  userData: {
    profileBg: string;
    profilePic: string;
    userName: string;
    userDetails: string;
    userLocation: string;
    visitor: number;
    viewers: number;
    jobs: number;
  };
}

const UserDetails = ({ userData }: UserDetailsProps) => {
  return (
    <div className="flex flex-col gap-[0.625rem]">
      <div className="relative bg-card rounded-[0.625rem] overflow-hidden pb-5">
        <div className="flex justify-center items-center relative isolate">
          <Image
            className="absolute w-full h-full -z-50 object-cover"
            src={userData.profileBg}
            alt=""
            width="400"
            height="100"
          />
          <Image
            className="translate-y-1/2 min-w-20 min-h-20"
            src={userData.profilePic}
            alt=""
            width="86"
            height="86"
          />
        </div>
        <div className="flex flex-col justify-center items-center mx-auto mt-12 max-w-[14.75rem]">
          <h3 className="text-center text-[1.125rem] font-semibold text-dark">
            {userData.userName}
          </h3>
          <p className="text-center text-dark font-normal text-sm px-1">
            {userData.userDetails}
          </p>
          <p className="text-center text-muted text-[0.75rem]">
            {userData.userLocation}
          </p>
        </div>
      </div>
      <Card className="p-5 rounded-[0.625rem] gap-[0.625rem]">
        <div className="flex justify-between items-center pb-[0.625rem] border-b border-[#E9ECEF]">
          <h6 className="text-sm text-dark leading-none">Profile Visitors</h6>
          <span className="text-active leading-none text-base">
            {userData.visitor}
          </span>
        </div>
        <div className="flex justify-between items-center pb-[0.625rem] border-b border-[#E9ECEF]">
          <h6 className="text-sm text-dark leading-none">Resume Viewers</h6>
          <span className="text-active leading-none text-base">
            {userData.viewers}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <h6 className="text-sm text-dark leading-none">My Jobs</h6>
          <span className="text-active leading-none text-base">
            {userData.jobs}
          </span>
        </div>
      </Card>
      <Card className="p-[0.625rem] rounded-[0.625rem] gap-[0.625rem]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-0 cursor-pointer hover:no-underline">
              <div className="flex flex-col gap-1">
                <span className="text-dark text-base leading-none decoration-0">
                  My calendar
                </span>
                <span className="text-primary font-normal text-base leading-none">
                  Upcoming Interviews
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
};

export default UserDetails;
