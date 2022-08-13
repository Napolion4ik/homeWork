import axios from "axios";
const URL = "https://62dfdd2198dd9c9df6087ec8.mockapi.io/contacts";

export function getContactsList() {
  return axios.get(URL).then((resp) => resp.data);
}

export function getContact(id) {
  return axios.get(URL + "/" + id).then((resp) => resp.data);
}

export function createContact(contact) {
  return axios.post(URL, contact).then((resp) => resp.data);
}

export function updateContact(contact) {
  return axios.put(URL + "/" + contact.id, contact).then((resp) => resp.data);
}

export function deleteContact(id) {
  return axios.delete(URL + "/" + id).then((resp) => resp.data);
}
