export const createFetchClient = (serverUrl, config) => {
  async function request(url, options = {}) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 30000);

    try {
      const res = await fetch(serverUrl + url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...(options.headers || {}),
          ...(config || {}),
        },
        signal: controller.signal,
      });

      clearTimeout(id);

      let data = null;
      try {
        data = await res.json();
      } catch {
        // response bukan JSON
      }

      if (!res.ok) {
        throw {
          status: res.status,
          data,
        };
      }

      return data;
    } catch (error) {
      if (error.name === "AbortError") {
        throw { status: 408, message: "Request timeout" };
      }
      throw error;
    }
  }

  return {
    get(url, config = {}) {
      return request(url, { method: "GET", ...config });
    },

    post(url, body, config = {}) {
      return request(url, {
        method: "POST",
        body: JSON.stringify(body),
        ...config,
      });
    },

    put(url, body, config = {}) {
      return request(url, {
        method: "PUT",
        body: JSON.stringify(body),
        ...config,
      });
    },

    patch(url, body, config = {}) {
      return request(url, {
        method: "PATCH",
        body: JSON.stringify(body),
        ...config,
      });
    },

    delete(url, body, config = {}) {
      return request(url, {
        method: "DELETE",
        body: JSON.stringify(body),
        ...config,
      });
    },
  };
};
