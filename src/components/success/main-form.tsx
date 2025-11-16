import { useState } from 'react'
import { Flex, Typography, UploadFile, message } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import Dragger from '../dragger/dragger.tsx'
import PreviewPdf from '../preview-pdf/preview-pdf.tsx'
import CheckButton from '../check-button/check-button.tsx'
import { Api } from '../../api/data'

type MainFormProps = {
  onSuccess?: (file: File) => void
}

function MainForm({ onSuccess }: MainFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [pdfFile, setPdfFile] = useState<File>()

  const handleFileChange = (file: UploadFile | null) => {
    setPdfFile(file?.originFileObj)
  }

  const handleRemove = () => {
    setPdfFile(undefined)
    message.info('Файл удален')
  }

  const handleSend = () => {
    if (!pdfFile) {
      message.error('Сначала выберите файл')
      return
    }
    setIsLoading(true)
    message.loading('Проверяем файл...', 2)
    Api.public
      .checkPdf(pdfFile)
      .then((newFile) => {
        message.success('Проверка завершена!')
        onSuccess?.(newFile)
      })
      .catch(() => {
        message.error('Произошла ошибка при обработке')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Flex vertical style={{ width: '100%' }}>
      <Title level={3}>Проверка документов</Title>
      <Paragraph>Проверьте pdf на соответствие ГОСТ</Paragraph>

      {!pdfFile && (
        <Dragger onChange={handleFileChange}>
          <Title level={3} style={{ margin: '0 0 10px' }}>
            <InboxOutlined />
          </Title>
          <Paragraph>Нажмите для выбора или перенесите файл для проверки</Paragraph>
          <Paragraph>Поддерживает pdf-файлы сгенерированные из doc</Paragraph>
        </Dragger>
      )}

      {pdfFile && (
        <Flex vertical gap='middle' style={{ width: '100%' }}>
          <PreviewPdf file={pdfFile} onRemove={handleRemove} disabled={isLoading} />
          <CheckButton onClick={handleSend} isLoading={isLoading} disabled={isLoading} />
        </Flex>
      )}
    </Flex>
  )
}

export default MainForm
