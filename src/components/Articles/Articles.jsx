import { DataContext } from "../../context";
import { useContext } from "react";
import { dateConvert } from "../../assets/date";
import { Link } from "react-router-dom";
import styles from "./Articles.module.css"

export default function Articles() {
  const { blog } = useContext(DataContext);

  return (
    <>
      <header className={styles.header}>
        <h1 className="after">My Articles</h1>
        <p>
          Below are all my recent blog posts. Click on any title to read the
          full article.
        </p>
      </header>
      <main>
        {blog &&
          blog.map((post, index) => (
            <article key={index} className={`${styles.blog_details} blog-details`}>
              <Link to={`/blog/${post.slug}`} className="blog-title">
                {post.title}
              </Link>
              <p className="date">{dateConvert(post.publishedAt)}</p>
              <p className="blog-des">{post.description}</p>
            </article>
          ))}
      </main>
    </>
  );
}
