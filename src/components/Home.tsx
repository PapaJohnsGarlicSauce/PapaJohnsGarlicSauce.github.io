import { ReactElement } from "react";
import me from "../mesmaller.png";

const Home = (): ReactElement => {
  return (
    <>
      <div>
        <h1 className="main-title">Hi!</h1>
        <h2 className="main-subtitle">
          My name is Victoria Lang and I'm a senior software engineer and all
          that shit
        </h2>
        <span>
          I like to do things. Lorem ipsum hell yeah brother! I also hate doing
          things too. It's a tenuous balance Lorem ipsum hell yeah brother.
          Lorem ipsum hell yeah brother Lorem ipsum hell yeah brother.
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
