import { createFetchClient } from "./fetchClient";

const api = createFetchClient("http://10.99.155.128:5000/api", {
  // Authorization,
});

export default api;
