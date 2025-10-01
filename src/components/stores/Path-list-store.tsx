import { create } from 'zustand'

export type pathListType = {
  key: Array<string>
  path: string
  name: string
}

export interface PathListStoreType {
  pathList: pathListType[]
  setPathList: (pathList: pathListType[]) => void
}

const PathListStore = create<PathListStoreType>((set) => ({
  pathList: [],
  setPathList: (pathList: pathListType[]) => set({ pathList }),
}))

export default PathListStore
