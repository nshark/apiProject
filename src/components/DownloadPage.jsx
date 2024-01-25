import { useLocation } from "react-router";

export default function DownloadPage() {
  const location = useLocation();
  async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "image file name here";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const uri = location.search.replace("?uri=", "");
  return (
    <div>
      Download Options
      <img src={uri} alt="asd" />
      <button onClick={downloadImage(uri)}>download</button>
    </div>
  );
}
