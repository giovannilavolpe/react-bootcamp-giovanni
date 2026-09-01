import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface nameAndPasswordProps {
  name: string;
  password: string;
  setPasswordInput: (password: string) => void;
  setNameInput: (name: string) => void;
  register: (name: string, password: string) => void;
}

export const useNameAndPassword = create<nameAndPasswordProps>()(
  persist(
    (set) => ({
      name: '',
      password: '',
      setPasswordInput: (password) => set({ password }),
      setNameInput: (name) => set({name}),
      register: (name: string, password: string) => set({ name, password})
    }), { name: 'clave'})
)