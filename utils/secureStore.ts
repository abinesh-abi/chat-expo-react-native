import * as SecureStore from "expo-secure-store";

export default SecureStore;

export const setTokens = async ({
  access,
  refresh,
}: {
  access: string;
  refresh: string;
}) => {
  const accessUpdated = await SecureStore.setItemAsync("access", access);
  const refreshUpdated = await SecureStore.setItemAsync("refresh", refresh);
  return;
};

export const getTokens = () => {
  const access = SecureStore.getItem("access");
  const refresh = SecureStore.getItem("refresh");
  if (access && refresh) return { access, refresh };
  else return null;
};

export const removeTokens = async () => {
  const access = await SecureStore.deleteItemAsync("access");
  const refresh = await SecureStore.deleteItemAsync("refresh");
  return;
};
