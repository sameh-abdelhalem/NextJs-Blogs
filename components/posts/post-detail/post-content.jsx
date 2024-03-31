import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with Nextjs",
  image: "getting-started-nextjs.png",
  content: "# This is a first post",
  date: "2022-02-10",
};
export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}
