import { Modal, Button, Flex } from 'antd'
import { ExportOutlined, CloseOutlined, ExpandOutlined, DownloadOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Card } from 'antd'
import { cutLongText } from '../../helpers/cut-long-text.ts'

import S from './preview-pdf.module.css'

interface PreviewPdfProps {
  file: File
  onRemove?: () => void
  onDownload?: () => void
  disabled?: boolean
}

function PreviewPdf({ file, onRemove, onDownload, disabled }: PreviewPdfProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pdfUrl = URL.createObjectURL(file)

  const handlePreview = () => {
    setIsModalOpen(true)
  }

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, '_blank')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Card size='small'>
        <Flex align='center' justify='space-between'>
          <span>{cutLongText(file.name, 35)}</span>
          <Flex align='center' gap='small'>
            <Button type='text' icon={<ExpandOutlined />} onClick={handlePreview} title='Превью' />
            <Button
              type='text'
              icon={<ExportOutlined />}
              onClick={handleOpenInNewTab}
              title='Открыть в новой вкладке'
            />
            {onDownload && <Button type='text' icon={<DownloadOutlined />} onClick={onDownload} title='Скачать' />}
            {onRemove && (
              <Button disabled={disabled} type='text' icon={<CloseOutlined />} onClick={onRemove} title='Удалить' />
            )}
          </Flex>
        </Flex>
      </Card>

      <Modal
        title={cutLongText(file.name, 70)}
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={[
          <Button key='open' icon={<ExportOutlined />} onClick={handleOpenInNewTab}>
            Открыть в новой вкладке
          </Button>,
          <Button key='close' onClick={handleCloseModal}>
            Закрыть
          </Button>,
        ]}
        className={S.modal}
      >
        <iframe
          className={S.iframe}
          src={pdfUrl}
          width='100%'
          style={{ border: 'none', borderRadius: 4 }}
          title='PDF preview'
        />
      </Modal>
    </>
  )
}

export default PreviewPdf
