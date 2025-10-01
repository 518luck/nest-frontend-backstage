import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import Siders from '@/components/Layouts/Siders';
import Headers from '@/components/Layouts/Headers';
import BreadcrumbNav from '@/components/Layouts/BreadcrumbNav';

const Layouts = () => {
  return (
    <>
      <Layout className="flex h-screen">
        {/* 侧边栏 */}
        <Siders />

        <Layout className="flex flex-1 flex-col">
          {/* 顶部导航栏 */}
          <Headers />
          {/* 内容区域 */}
          <div className="flex flex-1 flex-col bg-[#282828] px-4">
            {/* 面包屑导航栏 */}
            <BreadcrumbNav />
            <div className="mb-2 w-full flex-1 overflow-hidden rounded-[10px] bg-[#141414]">
              <Outlet />
            </div>
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default Layouts;
