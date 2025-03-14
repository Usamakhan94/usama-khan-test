"use client";
import UserDetails from "@/components/section/Hero/userDetails";
import SearchForm from "@/components/section/Hero/searchForm";
import Link from "next/link";
import JobCard from "@/components/ui/jobCard";
import JobsPosted from "@/components/section/Hero/jobsPosted";

export default function Home() {
  const userProfile = {
    profileBg: "/details-bg.png",
    profilePic: "/avatar-big.png",
    userName: "Albert Flores",
    userDetails:
      "Senior Product Designer | UI/UX Designer | Graphic Designer | Web...",
    userLocation: "Clinton, Maryland",
    visitor: 140,
    viewers: 20,
    jobs: 88,
  };

  const featuredJobs = [
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 22,
      featured: true,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 22,
      featured: true,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 2,
      applicants: 22,
      featured: true,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 22,
      featured: true,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 1,
      featured: true,
    },
  ];

  const recommendedJobs = [
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 22,
      featured: false,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 22,
      featured: false,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 2,
      applicants: 22,
      featured: false,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 22,
      featured: false,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 1,
      featured: false,
    },
  ];

  return (
    <div className="container pt-[1.5625rem]">
      <div className="grid lg:grid-cols-12 xl:gap-6 gap-5 min-w-0">
        <div className="lg:col-span-3 min-w-0">
          <UserDetails userData={userProfile} />
        </div>
        <div className="lg:col-span-9 pt-3.5 min-w-0">
          <SearchForm />
          <div className="flex flex-col gap-[1.5625rem] pt-4 w-full min-w-0">
            <JobsPosted
              jobsListing={featuredJobs}
              title={"Featured Jobs"}
              navigateTo={""}
            />
            <JobsPosted
              jobsListing={recommendedJobs}
              title={"Recommended Jobs"}
              navigateTo={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
