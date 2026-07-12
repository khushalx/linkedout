import type { Post } from "./types";

export const currentUser = {
  id: "khushal",
  name: "Khushal Dangar",
  headline: "CS & AI Student · Building products that probably did not need AI",
  location: "Delhi, India",
  university: "Rishihood University · Newton School of Technology",
  avatarInitials: "KD",
  profileViews: 284,
  postImpressions: 1842,
  connections: 517,
};

export const posts: Post[] = [
  {
    id: "p1",
    author: { name: "Ananya Mehta", initials: "AM", headline: "Product Designer at Daybreak · Making buttons feel things", color: "#D36B3D" },
    timestamp: "42m",
    content: "After 47 sticky notes, three identity crises, and one surprisingly useful user interview, Daybreak is live. It helps small teams turn scattered customer feedback into a clear product roadmap. Built with care, tested with caffeine.",
    likes: 214, comments: 31, reposts: 12, sends: 8, preview: "launch",
  },
  {
    id: "p2",
    author: { name: "Rohan Kapoor", initials: "RK", headline: "Software Engineer · Distributed systems, concentrated opinions", color: "#356E8C" },
    timestamp: "1h",
    content: "A practical lesson from moving our event pipeline to idempotent consumers: retries are not edge cases. They are the product. We cut duplicate writes by 98% by treating every handler as if the same event would arrive twice—because eventually it will.",
    likes: 389, comments: 46, reposts: 54, sends: 21, preview: "code",
  },
  {
    id: "p3",
    author: { name: "Meera Iyer", initials: "MI", headline: "Growth Lead · Recovering funnel enthusiast", color: "#72569A" },
    timestamp: "2h",
    content: "I’m humbled and honoured to announce that I’ve started an exciting new chapter as Growth Lead at Northstar. Grateful to everyone who made this incredible journey possible. Beyond excited for what comes next!",
    likes: 642, comments: 87, reposts: 18, sends: 14, preview: "job",
  },
  {
    id: "p4",
    author: { name: "Arjun Nair", initials: "AN", headline: "Founder at Plainspoken · Building in public, debugging in private", color: "#057642" },
    timestamp: "4h",
    content: "Your career is not a ladder. It is a series of tabs you opened, forgot about, and now cannot close because one of them might be important. Keep learning. Keep shipping. Occasionally restart the browser.",
    likes: 927, comments: 103, reposts: 76, sends: 44,
  },
  {
    id: "p5",
    author: { name: "Zoya Shaikh", initials: "ZS", headline: "CS Undergraduate · Frontend and questionable side projects", color: "#B24020" },
    timestamp: "6h",
    content: "Excited to share that I’m joining Pixelcraft as a frontend engineering intern! I’ll be working on design systems, accessibility, and learning why that one CSS rule works only on my laptop. Thank you to everyone who reviewed my portfolio.",
    likes: 318, comments: 52, reposts: 9, sends: 6,
  },
];

export const news = [
  ["Founders discover that every meeting could, in fact, be an email", "1h · 4,821 readers"],
  ["Entry-level role requests six years of experience in a three-year-old framework", "2h · 3,109 readers"],
  ["Professional celebrates being humbled for the fourth time this week", "3h · 2,744 readers"],
  ["AI thought leader posts same prediction with different carousel", "4h · 1,986 readers"],
  ["Intern asked to demonstrate ownership of entire company", "5h · 1,524 readers"],
];
