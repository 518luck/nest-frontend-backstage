import { Layout, Menu, Typography } from 'antd'
import LayoutStore from '@/components/stores/Layout-store'
import { GiBarn, GiEyeball, GiTeamIdea, GiAbstract050 } from 'react-icons/gi'

import logo from '@/assets/logo.svg'

const { Sider } = Layout
const { Title } = Typography

const items = [
  {
    key: '1',
    label: '控制台',
    icon: <GiBarn />,
  },
  {
    key: '2',
    label: '用户管理',
    icon: <GiTeamIdea />,
    children: [
      {
        label: '用户列表',
        key: '2-1',
      },
      {
        label: '角色列表',
        key: '2-2',
      },
    ],
  },
  {
    key: '3',
    label: '角色管理',
    icon: <GiEyeball />,
  },
  {
    key: '4',
    label: '菜单管理',
    icon: <GiAbstract050 />,
  },
]

const Siders = () => {
  const { collapsed, toggleCollapsed } = LayoutStore()
  return (
    <Sider
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      className='bg-[#141414] flex flex-col h-full'>
      <div className='h-18 flex items-center justify-center'>
        {collapsed ? (
          <>
            <img src={logo} alt='logo' className='w-8 h-8' />
          </>
        ) : (
          <>
            <img src={logo} alt='logo' className='w-12 h-12' />
            <Title level={4} className='text-white mt-3 whitespace-nowrap'>
              管理系统
            </Title>
          </>
        )}
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'
        items={items}
        className='h-[calc(100%-72px)] overflow-auto bg-[#141414] custom-menu-item'
      />
    </Sider>
  )
}
export default Siders
