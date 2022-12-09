import React, { useContext } from 'react'
import { ButtonProps } from './Button'
import Button from './Button'
import { WindmillContext } from './WindmillContext'

const DropdownItem = React.forwardRef<HTMLButtonElement, ButtonProps>(function DropdownItem(
  props,
  ref
) {
  // Note: className is passed to the inner Button
  const { children, ...other } = props

  const {
    theme: { dropdownItem },
  } = useContext(WindmillContext)

  const baseStyle = dropdownItem.base

  return (
    <li className={baseStyle}>
      <Button layout="__dropdownItem" ref={ref} {...other}>
        {children}
      </Button>
    </li>
  )
})

export default DropdownItem
