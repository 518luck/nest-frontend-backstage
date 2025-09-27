import { Layout, Menu, Typography, Avatar, Tag } from 'antd'
import { GiHamburgerMenu } from 'react-icons/gi'

import LayoutStore from '@/components/stores/Layout-store'
import PathListStore from '@/components/stores/Path-list-store'

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
  const { pathList } = PathListStore()
  console.log('🚀 ~ Headers ~ pathList:', pathList)

  return (
    <Header className='flex justify-center flex-col h-19 bg-[#141414] px-5 border-l border-[#1f1f1f80]'>
      <div className='flex justify-between w-full h-12'>
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
      <div className='w-full flex justify-start'>
        {pathList.length > 0 &&
          pathList.map((item) => (
            <Tag color='purple' className='-translate-y-1' key={item.path}>
              {item.name}
            </Tag>
          ))}
      </div>
    </Header>
  )
}
export default Headers
