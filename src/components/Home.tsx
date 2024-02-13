import { ReactElement } from "react";
import me from "../meoutline.png";

const Home = (): ReactElement => {
  return (
    <>
      <div className="home">
        <h1 className="main-title">Hi!</h1>
        <h2 className="main-subtitle">
          My name is Victoria Lang, and I'm a software engineer.
        </h2>
        <span className="descriptive-text">
          I'm a highly motivated Full Stack Software Developer with extensive
          experience in developing and implementing web-based solutions using
          C#, SQL, Typescript, JavaScript, and other languages.
        </span>
      </div>
      <img
        src={me}
        className="main-personal-photo"
        alt="Author, Victoria Lang, standing in front of a brick wall"
      />
    </>
  );
};

export default Home;
