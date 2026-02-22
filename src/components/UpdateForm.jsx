import { useState } from "react";
import ImageUpload from "./ImageUpload";
import { postUpdate } from "../services/api";

export default function UpdateForm() {
  const [form, setForm] = useState({
    type: "club",
    title: "",
    content: "",
    announcement_date: "",
    source: "",
    links: "",
    expires_at: "",
    is_published: false,
  });

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async () => {
    if (form.title.length < 3) return alert("Title too short");
    if (!form.announcement_date) return alert("Date required");

    setLoading(true);

    const payload = {
      ...form,
      links: form.links ? form.links.split(",") : [],
      images,
    };

    try {
      const res = await postUpdate(payload);
      alert("Posted successfully ✅");
      console.log(res);
    } catch (err) {
      alert("Error posting");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Create Update</h2>

      <select name="type" onChange={handleChange}>
        <option value="club">Club</option>
        <option value="general">General</option>
      </select>

      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />

      <textarea
        name="content"
        placeholder="Content"
        onChange={handleChange}
      />

      <input
        type="date"
        name="announcement_date"
        onChange={handleChange}
      />

      <input
        name="source"
        placeholder="Source"
        onChange={handleChange}
      />

      <input
        name="links"
        placeholder="Links (comma separated)"
        onChange={handleChange}
      />

      <input
        type="date"
        name="expires_at"
        onChange={handleChange}
      />

      <label>
        Publish Now
        <input
          type="checkbox"
          name="is_published"
          onChange={handleChange}
        />
      </label>

      <ImageUpload setImages={setImages} />

      <button onClick={handleSubmit}>
        {loading ? "Posting..." : "Submit"}
      </button>
    </div>
  );
}