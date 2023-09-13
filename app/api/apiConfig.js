import { create } from "apisauce";

const apiClient = create({
  // baseURL: "http://192.168.43.83:4000/api",
  baseURL: "http://192.168.1.134:4000/api",
  // baseURL: "http://192.168.1.134:4000/api/",
});

export default apiClient;
