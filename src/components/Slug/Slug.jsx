import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { dateConvert } from "../../assets/date";
// import Markdown from "react-markdown";
import styles from "./Slug.module.css";
import BlogMarkdown from "./Markdown";

export default function Slug({ darkTheme }) {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data.json`);
        const data = await response.json();
        const slugBlog = data.find((item) => item.slug === slug);
        setBlog(slugBlog);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <>
      {blog && (
        <div>
          <h1 className={`${styles.slug}`}>{blog.title}</h1>
          <p className="date">{dateConvert(blog.publishedAt)}</p>
          <div className={`${styles.blog_des}`}>
            <BlogMarkdown markdown={blog.content} darkTheme={darkTheme} />
            {/* <Markdown>{blog.content}</Markdown> */}
          </div>
        </div>
      )}
    </>
  );
}
