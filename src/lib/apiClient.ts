import { ofetch } from "ofetch";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// console.log("base url", BASE_URL);

const apiClient = ofetch.create({
  baseURL: BASE_URL,
  credentials: "include",
});

export default apiClient;
