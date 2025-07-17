import { create } from "zustand";

const useAuth = create((set) => ({
    user: null,
    token: null,
    login: (userData, authToken) => set({ user: userData, token: authToken }),
    logout: () => set({ user: null, token: null }),
  })
)

export default useAuth;