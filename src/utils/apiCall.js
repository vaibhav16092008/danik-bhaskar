import axios from "axios";
import { apiConfig } from "./connection";

const apiInstance = axios.create({
  baseURL: apiConfig.Base_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "Application/json",
  },
});
// Get Call Api
export const getCall = async (url = "") => {
  try {
    const response = apiInstance.get(url);
    return response;
  } catch (error) {
    return error;
  }
};

// Post Call Api
export const postCall = async (url = "", data) => {
  try {
    const response = apiInstance.post(url, data);
    return response;
  } catch (error) {
    return error;
  }
};

// Update Call Api
export const putCall = async (url = "", data) => {
  try {
    const response = apiInstance.put(url, data);
    return response;
  } catch (error) {
    return error;
  }
};

// Delete Call Api
export const deleteCall = async (url = "") => {
  try {
    const response = apiInstance.delete(url);
    return response;
  } catch (error) {
    return error;
  }
};
