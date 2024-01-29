import { Button } from "@mui/material";
import { ReactElement } from "react";

const Resume = (): ReactElement => {
  const downloadPdfResume = (): void => {
    const link = document.createElement("a");
    link.download = "Victoria Lang's Resume.pdf";
    link.href = "../../victoriaResume.pdf";
    link.click();
  };

  return (
    <div>
      <h2> Resume </h2>
      <Button variant="outlined" onClick={downloadPdfResume} color="primary">
        Download my resume
      </Button>
    </div>
  );
};

export default Resume;
