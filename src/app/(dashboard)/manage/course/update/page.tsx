import CourseUpdate from "@/components/course/CourseUpdate";
import Heading from "@/components/typography/Heading";

const page = ({
  searchParams,
}: {
  searchParams: {
    slug?: string;
  };
}) => {
  console.log("🚀 ~ searchParams:", searchParams);
  return (
    <>
      <Heading className="mb-8">Cập nhật khoá học</Heading>
      <CourseUpdate />
    </>
  );
};

export default page;
