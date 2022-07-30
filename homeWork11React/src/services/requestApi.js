import axios from "axios";

export const getData = () => {
  return axios("https://62dfdd2198dd9c9df6087ec8.mockapi.io/stickers");
};
export const postSticker = (description) => {
  return axios.post("https://62dfdd2198dd9c9df6087ec8.mockapi.io/stickers", {
    description,
  });
};
export const deleteSticker = (id) => {
  return axios.delete(
    `https://62dfdd2198dd9c9df6087ec8.mockapi.io/stickers/${id}`
  );
};
export const removeSticker = (description, id) => {
  return axios.put(
    `https://62dfdd2198dd9c9df6087ec8.mockapi.io/stickers/${id}`,
    {
      description,
    }
  );
};
