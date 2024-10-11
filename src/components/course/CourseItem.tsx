import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconEye, IconStar } from "../icons";

const CourseItem = () => {
  const courseInfo = [
    {
      title: "5.0",
      icon: (className?: string) => <IconStar className={className}></IconStar>,
    },
    {
      title: "8386",
      icon: (className?: string) => <IconEye className={className}></IconEye>,
    },
  ];
  return (
    <div className="p-4 bg-white dark:bg-grayDarker dark:border-opacity-10 border border-gray-200 rounded-lg">
      <Link href="#" className="block h-[180px]">
        <Image
          src="https://images.unsplash.com/photo-1667372393096-9c864313e868?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={300}
          height={200}
          className="w-full h-full object-cover rounded"
          sizes="@media (min-width: 640px) 300px, 100vw"
          priority
        ></Image>
      </Link>
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-5">
          Khóa học Typescript cơ bản dành cho người mới
        </h3>
        <div className="flex items-center gap-3 mb-5 text-xs text-gray-500 dark:text-grayDark">
          {courseInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon("size-4")}
              <span>{item.title}</span>
            </div>
          ))}
          <span className="font-bold text-base ml-auto text-[#ff695a]">
            499.000
          </span>
        </div>
        <Link
          href="#"
          className="flex items-center justify-center w-full mt-10 rounded-lg text-white font-semibold bg-primary h-12"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
