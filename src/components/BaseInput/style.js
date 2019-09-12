// const defaultStyle = {
//   input: 'relative',
//   inner: `appearance-none bg-white rounded border border-gray-600 text-black inline-block px-4 w-full placeholder-gray-700 outline-none`,
//   suffix: `absolute top-0 right-0 mr-4 h-full text-center pointer-events-none`,
//   suffix_inner: `h-full inline-flex items-center text-xs`,
//   count: `text-gray-800`,
//   count_length: `text-gray-800`
// }

const innerStyle = {
  default: `appearance-none bg-white rounded border border-gray-600 text-black px-4 w-full placeholder-gray-700 outline-none`,
  textarea: 'py-2 leading-tight block',
  focus: 'focus:border-primary',
  hover: 'hover:border-gray-700',
  disabled: 'bg-gray-100 text-gray-700 cursor-not-allowed',
  large: 'h-10 text-sm',
  medium: 'h-9 text-sm',
  small: 'h-8 text-xs',
  success: 'border-success',
  error: 'border-danger',
  prefix: 'pl-8'
}

export function getInnerStyle (params) {
  const { disabled, size, prefix, isError, isTextarea } = params

  return [
    innerStyle.default,
    innerStyle[size || 'medium'],
    disabled ? innerStyle.disabled : (innerStyle.focus + ' ' + innerStyle.hover),
    prefix ? innerStyle.prefix : '',
    isError ? innerStyle.error : '',
    isTextarea ? innerStyle.textarea : 'inline-block'
  ]
}

// export function getDefaultStyle (params) {
//   return defaultStyle[params]
// }

// export function getStyle () {
//   return {
//     input: 'relative',
//     inner: getInnerStyle,
//     suffix: `absolute top-0 right-0 mr-4 h-full text-center pointer-events-none`,
//     suffix_inner: `h-full inline-flex items-center text-xs`,
//     count: `text-gray-800`,
//     count_length: (isFulled) => (isFulled ? `text-primary` : `text-gray-800`)
//   }
// }

export const styleMapping = {
  input: 'relative block',
  inner: (params) => getInnerStyle(params),
  prefix: 'absolute top-0 left-0 ml-1 h-full text-center inline-flex items-center',
  suffix: `absolute top-0 right-0 mr-4 h-full text-center pointer-events-none`,
  suffix_inner: `h-full inline-flex items-center text-xs`,
  icon: 'h-100 w-6 text-center',
  count: (isTextarea = false) => {
    return `text-gray-800 text-xs ${isTextarea ? `absolute bottom-0 mb-1 mr-4 right-0` : ''}`
  },
  count_length: (isFulled) => (isFulled ? `text-primary` : `text-gray-800`)
}
