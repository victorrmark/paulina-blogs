import worskapceLarge from "../../assets/images/image-workspace-large.jpg";
import worskapceSmall from "../../assets/images/image-workspace-small.jpg";
import { FrontendMentorLogo, GitHubLogo, LinkedInLogo, X } from "../Logos";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <div>
        <h1 className={`${styles.title} title`}>About Me</h1>
        <div className="description">
          <p>
            Hi, I'm Paulina! Ever since I can remember, I've had a passion for
            creativity and problem-solving. That's what led me to the world of
            front-end web development. There's something magical about seeing an
            idea come to life in the browser—whether it's a simple layout
            experiment or a complex interface for a bigger project.
          </p>
          <p>
            When I'm not coding, I love getting lost in a good book. My taste is
            pretty eclectic: I'll happily read everything from fantasy novels to
            biographies of tech pioneers. Reading helps me unwind and often
            sparks new ideas for my coding projects.
          </p>
          <p>
            Another big passion of mine is the great outdoors. Hiking allows me
            to disconnect from the digital world and reconnect with nature. I
            love challenging hikes with rewarding views at the top. And if I'm
            not on the trails, you might catch me rock climbing. The combination
            of mental focus and physical endurance is a perfect parallel to
            tackling tough coding challenges!
          </p>
          <p>Some of my favorite books:</p>
          <div className={styles.book_list}>
            <ul>
              <li>
                <span>
                  <b>“The Pragmatic Programmer”</b> by Andrew Hunt and David
                  Thomas (for helpful insights into software development)
                </span>
              </li>
              <li>
                <span>
                  <b>“Ready Player One”</b>
                  by Ernest Cline (for some futuristic escapism)
                </span>
              </li>
              <li>
                <span>
                  <b>“The Hobbit”</b>
                  by J.R.R. Tolkien (for a bit of fantasy fun)
                </span>
              </li>
              <li>
                <span>
                  <b>“Educated”</b>
                  by Tara Westover (for incredible inspiration)
                </span>
              </li>
            </ul>
          </div>
          <p>
            I absolutely love my workspace as a place that inspires me to do my
            best work, so I thought I'd share it with you:
          </p>
          <img
            className="workspace mobile"
            alt="My workspace"
            src={worskapceSmall}
          />
          <img
            className="workspace desktop"
            alt="My workspace"
            src={worskapceLarge}
          />

          <p>
            I hope this blog not only documents my growth but also helps others
            see that coding can be for everyone. Thanks for joining me on this
            journey!
          </p>
        </div>
      </div>

      <h3 className={styles.follow_me}>Follow Me</h3>
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
    </>
  );
}
