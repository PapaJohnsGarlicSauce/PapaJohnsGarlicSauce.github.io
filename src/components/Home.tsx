import { ReactElement } from "react";
import me from "../mesmaller.png";

const Home = (): ReactElement => {
  // Add home content
  return (
    <>
      <div>
        <h1 className="main-title">Hi!</h1>
        <h2 className="main-subtitle">
          My name is Victoria Lang and I'm a senior software engineer and all
          that shit fuck you
        </h2>
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
