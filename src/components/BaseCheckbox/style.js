const labelStyle = {
  default: 'text-gray-900 relative mr-2 cursor-pointer m-0',
  button: {
    default: 'border rounded pl-4 py-2 pr-6 bg-white inline-flex items-center',
    static: 'border-gray-600 text-gray-900',
    hover: 'border-primary-light text-black',
    checked: 'border-primary text-primary-dark',
    disabled: 'cursor-not-allowed border-gray-600 text-gray-800 bg-gray-100'
  }
}

export function getLabelStyle (params) {
  const { isButton, isHover, isChecked, isDisabled } = params
  let buttonStyle

  if (isButton) {
    buttonStyle = [
      labelStyle.button.default,
      (isDisabled ? labelStyle.button.disabled : '') || (isHover ? labelStyle.button.hover : '') || (isChecked ? labelStyle.button.checked : '') || labelStyle.button.static
    ]
  }

  return [
    labelStyle.default,
    ...(isButton ? buttonStyle : '')
  ]
}

export const styleMapping = {
  label: (params) => getLabelStyle(params),
  input: 'hidden',
  prefix_checked: 'absolute top-0 right-0 flex items-center h-full mr-2'
}
