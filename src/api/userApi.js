

import axios from "axios"

const BASE_URL = "http://localhost:8000/api";

export const registerUser = async (userData) => {
  const res = await axios.post(`${BASE_URL}/users`, userData, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return res.data;
};
