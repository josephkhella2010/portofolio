/* 
import { FaDownload } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";

export default function DownloadBtn() {
   const { language } = useLanguage();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/resume.pdf`;
    link.download = "resume.pdf";
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
        title="Download resume"
      >
        Download CV <FaDownload />
      </button>
    </div>
  );
}
 */

import { FaDownload } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";

export default function DownloadBtn() {
  const { language } = useLanguage();
  const handleDownload = () => {
    const fileName =
      language === "sv" ? "resume-swedish.pdf" : "resume-english.pdf";
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
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
        title="Download resume"
      >
        {language === "sv" ? "Ladda ner" : "download"} CV <FaDownload />
      </button>
    </div>
  );
}
