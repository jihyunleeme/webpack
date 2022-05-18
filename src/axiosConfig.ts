import React from "react";

import axios from "axios";

let baseUrl = "";
if (process.env.NODE_ENV === "production") {
  baseUrl = "https://";
} else if (process.env.NODE_ENV === "development") {
  baseUrl = "https://";
}

const instance = axios.create({
  baseURL: `${baseUrl}`,
  headers: {},
  timeout: 5000,
});

instance.interceptors.request.use(
  (request) => {
    // settings
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error code = ", error.response.status);
    if (error.response.status === 500) {
      // do something
    }
    return Promise.reject(error);
  }
);
