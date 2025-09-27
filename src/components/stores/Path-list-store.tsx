import { create } from 'zustand'

const PathListStore = create((set) => ({
  pathList: [],
  setPathList: (pathList: string[]) => set({ pathList }),
}))

export default PathListStore
