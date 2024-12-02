import PageNotFound from "@/app/not-found";
import {
  IconCheck,
  IconClock,
  IconCourse,
  IconEye,
  IconPlay,
  IconStudy,
  IconUsers,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { courseLevelTitle } from "@/constants";
import { getCourseBySlug } from "@/lib/actions/course.actions";
import { ECourseStatus } from "@/types/enums";
import Image from "next/image";

const page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const data = await getCourseBySlug({
    slug: params.slug,
  });
  if (!data) return null;
  if (data.status !== ECourseStatus.APPROVED) return <PageNotFound />;

  const videoId = data.intro_url?.split("v=")[1];
  return (
    <div className="grid lg:grid-cols-[2fr,1fr] gap-10 min-h-screen">
      <div>
        <div className="relative aspect-video mb-5">
          {data.intro_url ? (
            <>
              <iframe
                width="1850"
                height="785"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Học TypeScript cho React Developer (2024)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full object-fill"
              ></iframe>
            </>
          ) : (
            <Image
              src={data.image}
              alt=""
              fill
              className="w-full h-full object-cover rounded-md"
            ></Image>
          )}
        </div>
        <h1 className="font-bold text-3xl mb-5">{data.title}</h1>
        <BoxSection title="Mô tả">
          <div className="leading-normal">{data.desc}</div>
        </BoxSection>

        <BoxSection title="Thông tin">
          <div className="grid grid-cols-4 gap-5 mb-10">
            <BoxInfo title="Bài học">
              <IconPlay className="size-5"></IconPlay>
              55
            </BoxInfo>
            <BoxInfo title="Mức độ">
              <IconCourse className="size-5"></IconCourse>
              {courseLevelTitle[data.level]}
            </BoxInfo>
            <BoxInfo title="Tổng thời gian">
              <IconClock className="size-5"></IconClock>
              11h57p
            </BoxInfo>
            <BoxInfo title="Lượt xem">
              <IconEye className="size-5"></IconEye>
              {data.views}
            </BoxInfo>
          </div>
        </BoxSection>

        <BoxSection title="Yêu cầu">
          {data.info.requirements.map((r, index) => (
            <div key={index} className="mb-3 flex items-center gap-2">
              <span className="flex-shrink-0 bg-primary size-5 text-white p-1 rounded flex items-center justify-center">
                <IconCheck />
              </span>
              <span>{r}</span>
            </div>
          ))}
        </BoxSection>

        <BoxSection title="Lợi ích">
          {data.info.benefits.map((b, index) => (
            <div key={index} className="mb-3 flex items-center gap-2">
              <span className="flex-shrink-0 bg-primary size-5 text-white p-1 rounded flex items-center justify-center">
                <IconCheck />
              </span>
              <span>{b}</span>
            </div>
          ))}
        </BoxSection>

        <BoxSection title="Q/A">
          {data.info.qa.map((qa, index) => (
            <div key={index}>
              <div>{qa.question}</div>
              <div>{qa.answer}</div>
            </div>
          ))}
        </BoxSection>
      </div>
      <div>
        <div className="bg-white rounded-lg p-5">
          <div className="flex items-center gap-2 mb-3">
            <strong className="text-[#ff695a] text-xl font-bold">
              {data.sale_price}
            </strong>
            <span className="text-slate-400 text-sm line-through">
              {data.price}
            </span>
            <span className="ml-auto inline-block px-3 py-1 rounded-lg bg-primary text-primary bg-opacity-10 font-semibold text-sm">
              {Math.floor((data.sale_price / data.price) * 100)}%
            </span>
          </div>
          <h3 className="font-bold mb-3">Khoá học bao gồm:</h3>
          <ul className="mb-5 flex flex-col gap-3 text-sm text-slate-500">
            <li className="flex items-center gap-2">
              <IconClock className="size-5" />
              <span>11 giờ học</span>
            </li>
            <li className="flex items-center gap-2">
              <IconPlay className="size-5" />
              <span>Video quay Full HD</span>
            </li>
            <li className="flex items-center gap-2">
              <IconUsers className="size-5" />
              <span>Có nhóm hỗ trợ</span>
            </li>
            <li className="flex items-center gap-2">
              <IconStudy className="size-5" />
              <span>Tài liệu kèm theo</span>
            </li>
          </ul>
          <Button variant="primary" className="w-full">
            Mua khoá học
          </Button>
        </div>
      </div>
    </div>
  );
};

function BoxInfo({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-lg p-5">
      <h4 className="text-sm text-slate-400 font-normal">{title}</h4>
      <h3 className="font-bold flex gap-1 items-center">{children}</h3>
    </div>
  );
}

function BoxSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="font-bold text-xl mb-5">{title}</h2>
      <div className="leading-normal mb-10">{children}</div>
    </>
  );
}

export default page;
