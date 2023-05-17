import client from "./client";

const endpoint = "/listings";

const login = async (username, password) => {
  try {
    const response = await fetch("https://example.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return { ok: response.ok, data };
  } catch (error) {
    return { ok: false, error };
  }
};
