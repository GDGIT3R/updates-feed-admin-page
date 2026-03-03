import { useState } from "react"
import { uploadImage } from "../services/cloudinary"

export default function ImageUpload({ setImages }) {
  const [uploading, setUploading] = useState(false)

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files)

    if (files.length === 0) return

    setUploading(true)

    const urls = []

    for (let file of files) {
      const url = await uploadImage(file)
      urls.push(url)
    }

    setImages(urls)
    setUploading(false)
  }

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 bg-muted/40 text-center hover:bg-muted/60 transition">
      <input
        type="file"
        multiple
        onChange={handleUpload}
        className="mx-auto"
      />

      {uploading && (
        <p className="text-sm text-muted-foreground mt-3">
          Uploading images...
        </p>
      )}
    </div>
  )
}