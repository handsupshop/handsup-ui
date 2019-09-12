export const styleMapping = {
  inner: ({ isError }) => {
    return [
      isError ? 'border border-danger p-2 rounded flex' : ''
    ]
  }
}
