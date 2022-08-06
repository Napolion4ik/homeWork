import axios from "axios";

export const getPost = () => {
  return axios.get("https://62dfdd2198dd9c9df6087ec8.mockapi.io/stickers");
};
export const getPostId = (id) => {
  return axios.get(
    `https://62dfdd2198dd9c9df6087ec8.mockapi.io/stickers/${id}`
  );
};
export const removePostId = (id, body) => {
  return axios.put(
    `https://62dfdd2198dd9c9df6087ec8.mockapi.io/stickers/${id}`,
    body
  );
};
export const removeCompletedId = (id, body) => {
  return axios.put(
    `https://62dfdd2198dd9c9df6087ec8.mockapi.io/stickers/${id}`,
    body
  );
};
export const deletePostId = (id) => {
  return axios.delete(
    `https://62dfdd2198dd9c9df6087ec8.mockapi.io/stickers/${id}`
  );
};
export const createPostId = (body) => {
  return axios.post(
    `https://62dfdd2198dd9c9df6087ec8.mockapi.io/stickers`,
    body
  );
};
