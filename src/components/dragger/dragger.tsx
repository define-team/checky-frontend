import { Upload, UploadFile } from 'antd'
import { PropsWithChildren } from 'react'

const { Dragger: AntDragger } = Upload

import S from './dragger.module.css'

type DraggerProps = {
  onChange?: (file: UploadFile) => void
}

function Dragger({ children, onChange }: PropsWithChildren<DraggerProps>) {
  return (
    <>
      <AntDragger
        name='pdf-file'
        multiple={false}
        accept='.pdf'
        onChange={(info) => onChange?.(info.file)}
        onDrop={(e) => console.log('Dropped files', e.dataTransfer.files)}
        className={S.wrapper}
      >
        {children}
      </AntDragger>
    </>
  )
}

export default Dragger
