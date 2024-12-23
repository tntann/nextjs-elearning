import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconEye, IconStar } from "../icons";
import { ICourse } from "@/database/course.model";

const CourseItem = ({ data }: { data: ICourse }) => {
  const courseInfo = [
    {
      title: data.rating[0],
      icon: (className?: string) => <IconStar className={className}></IconStar>,
    },
    {
      title: data.views,
      icon: (className?: string) => <IconEye className={className}></IconEye>,
    },
  ];
  return (
    <div className="p-4 bg-white dark:bg-grayDarker dark:border-opacity-10 border border-gray-200 rounded-lg">
      <Link href={`/course/${data.slug}`} className="block h-[180px]">
        <Image
          src={data.image}
          alt=""
          width={300}
          height={200}
          className="w-full h-full object-cover rounded"
          sizes="@media (min-width: 640px) 300px, 100vw"
          priority
        ></Image>
      </Link>
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-5">{data.title}</h3>
        <div className="flex items-center gap-3 mb-5 text-xs text-gray-500 dark:text-grayDark">
          {courseInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon("size-4")}
              <span>{item.title}</span>
            </div>
          ))}
          <span className="font-bold text-base ml-auto text-[#ff695a]">
            {data.sale_price.toLocaleString()} VNĐ
          </span>
        </div>
        <Link
          href={`/course/${data.slug}`}
          className="flex items-center justify-center w-full mt-10 rounded-lg text-white font-semibold bg-primary h-12"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
