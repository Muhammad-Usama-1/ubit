import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.100.5:4000/api/",
});

export default apiClient;
