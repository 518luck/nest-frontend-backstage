import { create } from 'zustand'

export interface LayoutStoreType {
  collapsed: boolean
  toggleCollapsed: () => void
}

const LayoutStore = create<LayoutStoreType>((set) => ({
  collapsed: false,
  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}))
export default LayoutStore
