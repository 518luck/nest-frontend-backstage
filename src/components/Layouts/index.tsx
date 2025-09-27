import { Layout } from 'antd'

import Siders from '@/components/Layouts/Siders'
import Headers from '@/components/Layouts/Headers'
import Contents from '@/components/Layouts/Contents'

const Layouts = () => {
  return (
    <>
      <Layout className='flex h-screen'>
        {/* 侧边栏 */}
        <Siders />

        <Layout className='flex flex-col flex-1'>
          {/* 顶部导航栏 */}
          <Headers />

          {/* 内容区域 */}
          <Contents />
        </Layout>
      </Layout>
    </>
  )
}

export default Layouts
