import { CourseGrid } from "@/components/common";
import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
// import createUser from "@/lib/actions/user.action";
import React from "react";

const page = async () => {
  // const user = await createUser({
  //   clerkId: "clerk_123",
  //   email_address: "nhattan8421@gmail.com",
  //   username: "tntan",
  // });
  return (
    <div>
      <Heading>Khoá học</Heading>
      <CourseGrid>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGrid>
    </div>
  );
};

export default page;
