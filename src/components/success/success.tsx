import { Button, Flex, Typography } from 'antd'
const { Title } = Typography
import PreviewPdf from '../preview-pdf/preview-pdf.tsx'
import { SearchOutlined } from '@ant-design/icons'

type SuccessProps = {
  file: File
  onExit?: VoidFunction
}

function Success({ file, onExit }: SuccessProps) {
  const handleDownload = () => {
    const url = URL.createObjectURL(file)
    const a = document.createElement('a')
    a.href = url
    a.download = file.name
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <Flex vertical style={{ width: '100%' }}>
      <Title level={3}>Результаты проверки</Title>

      <Flex vertical gap='middle' style={{ width: '100%' }}>
        <PreviewPdf file={file} onDownload={handleDownload} />
        <Button variant='solid' icon={<SearchOutlined />} size='large' onClick={onExit}>
          Проверить другой документ
        </Button>
      </Flex>
    </Flex>
  )
}

export default Success
