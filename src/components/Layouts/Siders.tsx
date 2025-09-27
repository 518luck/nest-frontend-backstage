import { useNavigate } from 'react-router-dom'
import { Layout, Menu, Typography, type MenuProps } from 'antd'
import LayoutStore from '@/components/stores/Layout-store'
import { GiBarn, GiEyeball, GiTeamIdea, GiAbstract050 } from 'react-icons/gi'

import logo from '@/assets/logo.svg'

const { Sider } = Layout
const { Title } = Typography

const items = [
  {
    key: 'control',
    label: '控制台',
    icon: <GiBarn />,
  },
  {
    key: 'user',
    label: '用户管理',
    icon: <GiTeamIdea />,
  },
  {
    key: 'role',
    label: '角色管理',
    icon: <GiEyeball />,
  },
  {
    key: 'menu',
    label: '菜单管理',
    icon: <GiAbstract050 />,
  },
]

const Siders = () => {
  const navigate = useNavigate()
  const { collapsed, toggleCollapsed } = LayoutStore()

  const navigatorClick: MenuProps['onClick'] = (e) => {
    console.log(e.key)
    navigate(`/${e.key}`)
  }
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
        onClick={navigatorClick}
        className='h-[calc(100%-72px)] overflow-auto bg-[#141414] custom-menu-item'
      />
    </Sider>
  )
}
export default Siders
