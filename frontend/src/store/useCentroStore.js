import create from "zustand";

import api from "../config/apiConfig";

const useCentroStore = create((set, get) => ({
  data: [],
  loading: false,
  hasErrors: false,
  isLoggedIn: false,
  logInFailed: false,
  token: "", // token should not be saved in a store that would be written to localstorage
  // -----------------------------------------------------
  logIn: async (loginObj) => {
    set((state) => ({ ...state, loading: true, logInFailed: false }));
    try {
      const response = await api.post("api-token-auth/", loginObj);
      set((state) => ({
        ...state,
        token: response.data.token,
        loading: false,
        isLoggedIn: true,
      }));
    } catch (err) {
      set((state) => ({ ...state, logInFailed: true, loading: false }));
    }
  },
  // -----------------------------------------------------
  logOut: () => {
    set((state) => ({ ...state, isLoggedIn: false, token: "" }));
  },
  // -----------------------------------------------------
  fetchData: async () => {
    set((state) => ({ ...state, loading: true, hasErrors: false }));
    try {
      const token = get().token;
      const response = await api.get("api/v1/inventory-log/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      set((state) => ({
        ...state,
        data: (state.data = response.data),
        loading: false,
      }));
    } catch (err) {
      set((state) => ({ ...state, hasErrors: true, loading: false }));
    }
  },
}));

export default useCentroStore;
