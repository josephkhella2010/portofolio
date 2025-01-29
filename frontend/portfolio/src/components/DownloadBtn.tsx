import React from "react";
import { FaDownload } from "react-icons/fa6";

export default function DownloadBtn() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv3.pdf";
    link.download = "cv3.pdf";
    link.title = "Download resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="downloadBtnContainer">
      <button
        onClick={handleDownload}
        className="downloadBtn"
        title="Download resume">
        Download CV <FaDownload />
      </button>
    </div>
  );
}
