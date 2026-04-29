import { UserModel, UserResponse } from "@/shared/models/user-model";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2)
    return decodeURIComponent(parts.pop()?.split(";").shift() || "");
  return null;
};
export const registerUser = async (
  userData: UserModel,
): Promise<UserResponse> => {
  await fetch("http://localhost:8000/sanctum/csrf-cookie", {
    method: "GET",
    credentials: "include",
  });

  const xsrfToken = getCookie("XSRF-TOKEN");

  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-XSRF-TOKEN": xsrfToken || "",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar usuário");
  }

  return response.json();
};
