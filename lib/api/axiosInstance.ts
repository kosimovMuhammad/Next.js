import axios from "axios";
import { toast } from "sonner";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

function extractErrorMessages(error: unknown): string[] {
  if (!axios.isAxiosError(error)) {
    return ["Хатогии номаълум рух дод."];
  }

  const data = error.response?.data;

  if (Array.isArray(data?.errors) && data.errors.length > 0) {
    return data.errors;
  }

  if (data?.errors && typeof data.errors === "object") {
    return Object.values(data.errors as Record<string, string[]>).flat();
  }

  if (typeof data?.title === "string") {
    return [data.title];
  }

  return [error.message];
}

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    extractErrorMessages(error).forEach((message) => toast.error(message));
    return Promise.reject(error);
  }
);
