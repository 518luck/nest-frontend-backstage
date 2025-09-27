import { Layout, Menu, Typography, Avatar } from 'antd'
import { GiHamburgerMenu } from 'react-icons/gi'

import LayoutStore from '@/components/stores/Layout-store'

const { Header } = Layout
const { Text } = Typography

const MenuItems = [
  {
    key: '1',
    label: <Text className='text-white'>控制台</Text>,
  },
  {
    key: '2',
    label: <Text className='text-white'>设置</Text>,
  },
]
const Headers = () => {
  const { toggleCollapsed } = LayoutStore()

  return (
    <Header className='text-white bg-[#141414] px-5 border-l border-[#1f1f1f80]'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-start items-center gap-6'>
          <div className='cursor-pointer'>
            <GiHamburgerMenu
              onClick={() => toggleCollapsed()}
              className=' text-2xl'
            />
          </div>
          <div>
            <Menu
              mode='horizontal'
              items={MenuItems}
              className='bg-transparent'
            />
          </div>
        </div>
        <div>
          <Avatar
            src='https://picsum.photos/200/300'
            alt='User Avatar'
            className='cursor-pointer'
          />
        </div>
      </div>
    </Header>
  )
}
export default Headers
