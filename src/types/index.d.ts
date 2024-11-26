export type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
};

export type TMenuItem = {
  url: string;
  title: string;
  icon?: React.ReactNode;
};

export type TCreateUserPrams = {
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
};

// course
export type TCreateCourseParams = {
  title: string;
  slug: string;
};
