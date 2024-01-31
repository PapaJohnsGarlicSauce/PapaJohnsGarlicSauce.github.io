import { ReactElement } from "react";

const About = (): ReactElement => {
  return (
    <div className="about-content">
      <h2>About</h2>
      <p>
        I am a software engineer with over a decade in experience writing
        applications in a variety of domains, including education, insurance,
        regulations, and most recently, in the public policy tech sector. I like
        my dog.
      </p>
      <p>
        I have experience with a variety of languages and frameworks, including
        Typescript, React, C#, .NET, Vue.js, Node.js, and SQL in a variety of
        database flavors (PostgreSQL, Microsoft SQL Server, MySQL- although it's
        been a hot minute on that one). I love to learn so I'm always
        experiementing with new technologies and languages.
      </p>
      <p>
        In my free time, I enjoy playing video games, drinking water from a very
        large cup, working out, and going to drag shows. I have a mild obsession
        with maps and geography. I also love cooking and Bea Arthur.
      </p>
      <p>
        Don't hesitate to reach out! You can contact me{" "}
        <a href="/contact">here</a> or feel free to reach out to me on{" "}
        <a href="https://www.linkedin.com/in/victoria-lang-516a1a35/">
          LinkedIn
        </a>
        .
      </p>
      <p>
        나도 한국에 살았고 대학에서 한국어를 공부했는데 한국어 아직 부족해요
        ㅠㅠ
      </p>
    </div>
  );
};

export default About;
