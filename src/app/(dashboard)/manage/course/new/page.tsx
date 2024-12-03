import CourseAddNew from "@/components/course/CourseAddNew";
import Heading from "@/components/common/Heading";
import { getUserInfo } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";

const page = async () => {
  const { userId } = auth();
  if (!userId) return null;
  const mongoUser = await getUserInfo({ userId });
  if (!mongoUser) return null;
  return (
    <>
      <Heading>Tạo khoá học mới</Heading>
      <CourseAddNew user={JSON.parse(JSON.stringify(mongoUser))}></CourseAddNew>
    </>
  );
};

export default page;
