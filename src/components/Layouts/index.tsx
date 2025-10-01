import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

import Siders from '@/components/Layouts/Siders'
import Headers from '@/components/Layouts/Headers'

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
          <div className='bg-[#1f1f1f] flex-1'>
            <nav>测试</nav>
            <div className='w-full h-full bg-[#141414] rounded-[10px]'>
              <Outlet />
            </div>
          </div>
        </Layout>
      </Layout>
    </>
  )
}

export default Layouts
