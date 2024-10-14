import CourseAddNew from "@/components/course/CourseAddNew";
import Heading from "@/components/typography/Heading";
import React from "react";

const page = () => {
  return (
    <>
      <Heading>Tạo khoá học mới</Heading>
      <CourseAddNew></CourseAddNew>
    </>
  );
};

export default page;
