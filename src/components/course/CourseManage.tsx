"use-client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Heading from "../typography/Heading";
import Image from "next/image";
import { commonClassNames, courseStatus } from "@/constants";
import { cn } from "@/lib/utils";
import { IconDelete, IconEdit, IconEye, IconStudy } from "../icons";
import Link from "next/link";

const CourseManage = () => {
  return (
    <div>
      <Heading className="mb-10">Quản lý khoá học</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Thông tin</TableHead>
            <TableHead>Giá</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <Image
                  src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJlYWN0fGVufDB8fDB8fHww"
                  alt=""
                  width={80}
                  height={80}
                  className="flex-shrink-0 size-16 rounded-lg object-cover"
                ></Image>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base">
                    Khóa học Typescript cơ bản dành cho người mới
                  </h3>
                  <h4 className="text-sm text-slate-500">12/2/2024</h4>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <span className="font-bold text-base">499.000</span>
            </TableCell>
            <TableCell>
              <span
                className={cn(
                  commonClassNames.status,
                  courseStatus[0].classname
                )}
              >
                {courseStatus[0].title}
              </span>
            </TableCell>
            <TableCell>
              <div className="flex gap-3">
                <Link
                  href="/manage/course/update-content?slug=khoa-hoc-typescript-co-ban-danh-cho-nguoi-moi"
                  className={commonClassNames.action}
                >
                  <IconStudy />
                </Link>
                <Link
                  href="/course/khoa-hoc-typescript-co-ban-danh-cho-nguoi-moi"
                  target="_blank"
                  className={commonClassNames.action}
                >
                  <IconEye />
                </Link>
                <Link
                  href="/manage/course/update?slug=khoa-hoc-typescript-co-ban-danh-cho-nguoi-moi"
                  className={commonClassNames.action}
                >
                  <IconEdit />
                </Link>
                <button className={commonClassNames.action}>
                  <IconDelete />
                </button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CourseManage;
