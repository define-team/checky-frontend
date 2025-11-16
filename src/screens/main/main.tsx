import { useState } from 'react'
import { Flex } from 'antd'
import MainForm from '../../components/main-form/main-form.tsx'
import Faq from '../../components/faq/faq.tsx'
import Success from '../../components/success/success.tsx'

function Main() {
  const [resultPdf, setResultPdf] = useState<File>()

  return (
    <Flex vertical align='center' justify='space-between' gap={'50px'}>
      {!resultPdf && <MainForm onSuccess={setResultPdf} />}
      {resultPdf && <Success file={resultPdf} onExit={() => setResultPdf(undefined)} />}
      <Faq />
    </Flex>
  )
}

export default Main
