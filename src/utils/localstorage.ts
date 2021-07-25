import { LocalStorageTypes } from "../types/localstorage";

export const setLocalstorage = (type: LocalStorageTypes, data: any) => {
  window.localStorage.setItem(type, JSON.stringify(data));
};

export const getLocalstorage = (type: LocalStorageTypes) => {
  const data = window.localStorage.getItem(type);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
};

export const cleanWithLogoutUser = () => {
  window.localStorage.removeItem(LocalStorageTypes.TOKEN);
  window.localStorage.removeItem(LocalStorageTypes.USER);
};
