import { ReactElement } from "react";

const Footer = (): ReactElement => {
    return (
      <footer>
        <p>
          Favicon by <a href="https://twemoji.twitter.com/">Twemoji</a>
        </p>
        <p>
          Images by <a href="https://mhale-ux.com/">Matthew Hale, PhD</a>
        </p>
        <p>
          Website built by me &#128133; on{" "}
          <a href="https://github.com/PapaJohnsGarlicSauce/PapaJohnsGarlicSauce.github.io/tree/main">
            Github
          </a>
        </p>
      </footer>
    );
};

export default Footer;