import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type pathListType = {
  key: Array<string>
  path: string
  name: string
}

export interface PathListStoreType {
  pathList: pathListType[]
  setPathList: (pathList: pathListType[]) => void
}

const PathListStore = create<PathListStoreType>()(
  persist(
    (set) => ({
      pathList: [],
      setPathList: (pathList: pathListType[]) => set({ pathList }),
    }),
    {
      name: 'path-list-store',
    }
  )
)

export default PathListStore
