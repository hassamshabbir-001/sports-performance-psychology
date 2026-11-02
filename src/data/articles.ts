// ADD NEW ARTICLES HERE: the homepage Popular Articles section and the /blog/
// index page read this file automatically, newest first. No homepage edit
// needed when publishing: just append a new entry and push.

export interface Article {
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  href: string;
  date: string; // ISO date string, e.g. "2026-11-10"
  width?: number; // true image width in px (defaults below if omitted)
  height?: number; // true image height in px (defaults below if omitted)
}

export const articles: Article[] = [
  {
    title: "Visualization for Athletes: A Practical Guide",
    excerpt: "A practical guide to visualization for athletes: what mental imagery is, how to practice it step by step, and the mistakes that make it useless.",
    image: "/images/visualization-for-athletes.webp",
    alt: "Athlete sitting on the track with eyes closed, practicing visualization at sunset",
    href: "/blog/visualization-for-athletes/",
    date: "2026-11-02",
    width: 1448,
    height: 1086,
  },
  {
    title: "Sports Psychology Salary: Pay by Role & State",
    excerpt: "Sports psychology pay explained with sourced data: average salaries, ranges by role and experience, what drives pay, and where the numbers come from.",
    image: "/images/sports-psychology-salary-guide.webp",
    alt: "Sports psychology consultant discussing plans with an athlete",
    href: "/blog/sports-psychology-salary/",
    date: "2026-11-01",
    width: 1448,
    height: 1086,
  },
  {
    title: "Online Sports Psychology Degree: Accredited Options",
    excerpt: "What to know before earning a sports psychology degree online: accreditation, how coursework and practicums work, costs, and red flags to avoid.",
    image: "/images/online-sports-psychology-degree.webp",
    alt: "Student attending an online sports psychology lecture with headphones",
    href: "/blog/online-sports-psychology-degree/",
    date: "2026-10-31",
    width: 1448,
    height: 1086,
  },
  {
    title: "Sports Psychology Master's Programs: 2026 Guide",
    excerpt: "How to compare sports psychology master's programs: accreditation, curriculum, supervised experience, costs, and the questions to ask before you apply.",
    image: "/images/sports-psychology-masters-programs.webp",
    alt: "Graduate student studying sports psychology with a graduation cap on the desk",
    href: "/blog/sports-psychology-masters-programs/",
    date: "2026-10-30",
    width: 1448,
    height: 1086,
  },
];
