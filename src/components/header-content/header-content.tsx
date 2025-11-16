import { Flex, Typography, Col, Row } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import CheckButton from '../check-button/check-button'
import fullLogoIcon from '../../../public/clear-small-logo.svg?raw'
const { Text } = Typography

import S from './header-content.module.css'

function HeaderContent() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Row style={{ height: '100%' }}>
      <Col span={10}>
        <Flex justify='start' align='center' style={{ height: '100%' }}>
          <span className={S.logo} dangerouslySetInnerHTML={{ __html: fullLogoIcon }} />
          <Text style={{ fontSize: '32px' }}>Checky</Text>
        </Flex>
      </Col>
      <Col span={4}>
        {pathname !== '/' && (
          <Flex justify='center' align='center' style={{ height: '100%' }}>
            <CheckButton onClick={() => navigate('/')} />
          </Flex>
        )}
      </Col>
      <Col span={10}>
        <Flex justify='end'>{/* <NavLink to='/about'>О нас</NavLink> */}</Flex>
      </Col>
    </Row>
  )
}

export default HeaderContent
