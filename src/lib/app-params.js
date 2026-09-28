// src/lib/app-params.js

export const appParams = {
  appId: import.meta.env.VITE_APP_ID || "local-app",
  token: localStorage.getItem("auth_token") || null,
};

export function getAccessToken() {
  return localStorage.getItem("auth_token") || null;
}
