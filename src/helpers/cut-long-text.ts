export function cutLongText(text: string, length: number) {
  if (text.length > length) {
    return text.slice(0, length).concat('...')
  }

  return text
}
