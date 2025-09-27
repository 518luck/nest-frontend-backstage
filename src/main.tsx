import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import { antdTheme } from '@/styles/antdTheme'

import '@/styles/global.css'
import router from '@/router'

createRoot(document.getElementById('root')!).render(
  <StyleProvider layer>
    <ConfigProvider theme={antdTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </StyleProvider>
)
