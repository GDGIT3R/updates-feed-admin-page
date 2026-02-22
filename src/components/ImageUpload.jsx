import { useState } from "react";
import { uploadImage } from "../services/cloudinary";

export default function ImageUpload({ setImages }) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);

    console.log(files)

    if (files.length > 5) {
      alert("Max 5 images allowed");
      return;
    }

    setUploading(true);
    const urls = [];

    for (let file of files) {
      const url = await uploadImage(file);
      urls.push(url);
    }

    setImages(urls);
    setUploading(false);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleUpload} />
      {uploading && <p>Uploading...</p>}
    </div>
  );
}