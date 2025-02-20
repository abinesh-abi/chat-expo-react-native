import * as SecureStore from "expo-secure-store";

export default SecureStore;

export const setAccessAndRefreshToken = async ({
  access,
  refresh,
}: {
  access: string;
  refresh: string;
}) => {
  const accessUpdated = await SecureStore.setItemAsync("access", access);
  const refreshUpdated = await SecureStore.setItemAsync("refresh", refresh);
  console.log({accessUpdated,refreshUpdated})
  return
};
