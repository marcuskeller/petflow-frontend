import { UserModel, UserResponse } from "@/shared/models/user-model";

export const registerUser = async (
  userData: UserModel,
): Promise<UserResponse> => {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar usuário");
  }

  return response.json();
};
