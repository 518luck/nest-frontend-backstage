import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

const Contents = () => {
  return (
    <Content className='bg-[#1f1f1f] p-2'>
      <div className='w-full h-full bg-[#141414] rounded-[10px]'>
        <Outlet />
      </div>
    </Content>
  )
}
export default Contents
