import { CollapseProps, Divider, Flex } from 'antd'
import { Collapse, Typography } from 'antd'

const { Title } = Typography

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Что проверяем',
    children: <p>Выполняем проверку правил оформления в соответствии с ГОСТ</p>,
  },
  {
    key: '2',
    label: 'Как узнать результат проверки',
    children: (
      <p>По окончанию проверки вы получите подготовленный документ, в котором будут выделены ошибки оформления</p>
    ),
    style: {
      padding: '0',
    },
  },
]

function Faq() {
  return (
    <Flex style={{ width: '100%' }} vertical>
      <Divider />
      <Title level={3}>Общая информация</Title>
      <Collapse defaultActiveKey={['1']} ghost items={items} />
    </Flex>
  )
}

export default Faq
