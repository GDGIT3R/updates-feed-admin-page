import axios from "axios";

const API_URL =
  "https://campus-feed.iter-feed.workers.dev/admin/create-update";

export const postUpdate = async (data) => {
  const res = await axios.post(API_URL, data, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
  });

  return res.data;
};