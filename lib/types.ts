export type Author = {
  name: string;
  initials: string;
  headline: string;
  color: string;
};

export type Post = {
  id: string;
  author: Author;
  timestamp: string;
  content: string;
  likes: number;
  comments: number;
  reposts: number;
  sends: number;
  preview?: "launch" | "code" | "job";
  userCreated?: boolean;
};
