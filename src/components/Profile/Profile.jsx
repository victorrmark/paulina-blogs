import { useContext } from "react";
import { DataContext } from "../../context";
import { dateConvert } from "../../assets/date";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import {FrontendMentorLogo, GitHubLogo, LinkedInLogo, X} from "../Logos"

export default function Profile() {
  const { blog } = useContext(DataContext);

  return (
    <div>
      <header id={styles.profile_header}>
        <h1 className={`${styles.title} title`}>Hi, I'm Paulina 👋</h1>
        <div className="description">
          <p>
            I'm on a journey to become a front-end web developer. I love
            building little projects, trying out new coding techniques, and
            sharing what I learn along the way. When I'm not at my desk, you'll
            find me reading, hiking through the mountains, or challenging myself
            on rock-climbing walls.
          </p>
          <p>
            I started this blog to document my progress, keep myself
            accountable, and hopefully inspire anyone else who's learning to
            code. Welcome to my corner of the internet, and thanks for stopping
            by!
          </p>

          <section className="socials">
            <button className="social">
              <X />
            </button>
            <button className="social">
              <GitHubLogo />
            </button>
            <button className="social">
              <LinkedInLogo />
            </button>
            <button className="social">
              <FrontendMentorLogo />
            </button>
          </section>
        </div>
      </header>

      <main className="profile_body">
        <h1 className="after">Latest Articles</h1>
        <section className={styles.section}>
          {blog ? (
            blog.slice(0, 5).map((post, i) => (
              <article key={i}>
                <Link className={`${styles.blog_title} blog-title`} to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
                <p className="date">{dateConvert(post.publishedAt)}</p>
              </article>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
        <Link to="/blog" className={styles.blog} >View all articles</Link>
      </main>
    </div>
  );
}
