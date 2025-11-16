import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { ConfigProvider, Layout } from 'antd'
import Main from './screens/main/main.tsx'
import FooterContent from './components/footer-content/footer-content.tsx'
import HeaderContent from './components/header-content/header-content.tsx'

const { Header, Content, Footer } = Layout

import S from './app.module.css'

const queryClient = new QueryClient()

const ConfigProviderWrap = () => {
  return (
    <Layout className={S.root}>
      <Header className={S.header}>
        <HeaderContent />
      </Header>
      <Content className={S.content}>
        <Outlet />
      </Content>
      <Footer>
        <FooterContent />
      </Footer>
    </Layout>
  )
}

const router = createBrowserRouter([
  {
    element: <ConfigProviderWrap />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/about',
        element: <Main />,
      },
    ],
  },
])

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: '#33333b',
          fontSize: 18,
        },
        components: {
          Layout: {
            colorBgLayout: '#ffffff',
            headerBg: '#f5f5f5',
            footerBg: '#f5f5f5',
            footerPadding: '10px 50px',
          },
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} fallbackElement={<div>404 page</div>} />
      </QueryClientProvider>
    </ConfigProvider>
  )
}

export default App
