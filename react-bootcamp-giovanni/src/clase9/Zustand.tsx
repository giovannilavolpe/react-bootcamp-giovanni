import { create } from 'zustand'

interface ContadorState {
  contador: number
  name: string;
  incrementar: () => void
  decrementar: () => void
}

export const useContadorStore = create<ContadorState>((set) => ({
  contador: 0,
  name: 'pepe',
  incrementar: () => set((state) => ({ contador: state.contador + 1 })),
  decrementar: () => set((state) => ({ contador: state.contador - 1 })),
}))