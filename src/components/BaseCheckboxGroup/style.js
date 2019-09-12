export const styleMapping = {
  inner: ({ isFlex, isError }) => {
    return [
      isFlex ? 'flex flex-wrap' : '',
      isError ? 'border border-danger p-2 rounded' : ''
    ]
  }
}
