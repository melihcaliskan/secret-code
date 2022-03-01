const STORAGE_KEY = "game";

export const storageService = {
  get: async () => {
    const value = await localStorage.getItem(STORAGE_KEY) || "";
    return JSON.parse(value);
  },
  set: (data: any) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },
};