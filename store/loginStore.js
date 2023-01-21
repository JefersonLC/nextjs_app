import { create } from 'zustand';

export const useLoginStore = create((set) => ({
  error: '',
  setError: (message) => set((state) => ({ error: message })),
  removeError: () => set((state) => ({ error: '' })),
}));
