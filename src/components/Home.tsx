import { ReactElement } from "react";
import me from "../mesmaller.png";

const Home = (): ReactElement => {
  // Add home content
  return (
    <div>
      <img
        src={me}
        className="main-personal-photo"
        alt="Author, Victoria Lang, standing in front of a brick wall"
      />{" "}
    </div>
  );
};

export default Home;
