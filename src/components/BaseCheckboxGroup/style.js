export const styleMapping = {
  inner: ({ isError }) => {
    return [
      'inline-flex',
      isError ? 'border border-danger p-2 rounded flex' : ''
    ]
  }
}
