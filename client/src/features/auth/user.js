import { AccountsApi } from "@/api";

export const loadInitialData = async () => {
  const response = await AccountsApi.getUserData();
  const data = {
    id: response.data.id,
    username: response.data.username,
    isAdmin: response.data.is_admin,
  };
  return data;
};
