import { parse } from 'content-disposition-header'
import { API_URL } from '../../constants/constants.ts'

function checkPdf(file: File): Promise<File> {
  const formData = new FormData()
  formData.append('file', file)

  return fetch(`${API_URL}/upload`, {
    method: 'POST',
    body: formData,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.blob().then((blob) => {
      const contentDisposition = response.headers.get('content-disposition')
      let filename = 'document.pdf'

      if (contentDisposition) {
        const parsed = parse(contentDisposition)
        filename = parsed.parameters?.filename ?? filename
      }

      return new File([blob], filename, { type: 'application/pdf' })
    })
  })
}

export const Api = {
  public: { checkPdf },
  private: {},
}
