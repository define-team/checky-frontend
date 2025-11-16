import { SearchOutlined } from '@ant-design/icons'
import { Button } from 'antd'

type CheckButtonProps = {
  onClick?: () => void
  isLoading?: boolean
  disabled?: boolean
}

function CheckButton({ onClick, isLoading, disabled }: CheckButtonProps) {
  return (
    <Button
      loading={isLoading}
      disabled={disabled}
      variant='solid'
      icon={<SearchOutlined />}
      size='large'
      onClick={onClick}
    >
      Проверить документ
    </Button>
  )
}

export default CheckButton
