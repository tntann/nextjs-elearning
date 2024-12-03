import CourseUpdate from "@/components/course/CourseUpdate";
import Heading from "@/components/common/Heading";
import { getCourseBySlug } from "@/lib/actions/course.actions";

const page = async ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  const findCourse = await getCourseBySlug({
    slug: searchParams.slug,
  });
  if (!findCourse) return null;
  return (
    <>
      <Heading className="mb-8">Cập nhật khoá học</Heading>
      <CourseUpdate data={JSON.parse(JSON.stringify(findCourse))} />
    </>
  );
};

export default page;
