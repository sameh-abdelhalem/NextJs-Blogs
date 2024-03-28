import Image from "next/image";
import classes from "./hero.module.css";
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sameh.jpg"
          alt="an image showing sameh"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Sameh</h1>
      <p>
        i blog about web development - especially frontend frameworks like React
        or Angular.
      </p>
    </section>
  );
}
