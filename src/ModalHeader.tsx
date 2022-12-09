import React, { useContext } from 'react'
import classNames from 'classnames'
import { WindmillContext } from './WindmillContext'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ModalHeader = React.forwardRef<HTMLParagraphElement, Props>(function ModalHeader(props, ref) {
  const { children, className, ...other } = props
  const {
    theme: { modalHeader },
  } = useContext(WindmillContext)

  const baseStyle = modalHeader.base

  const cls = classNames(baseStyle, className)

  return (
    <p className={cls} ref={ref} {...other}>
      {children}
    </p>
  )
})

export default ModalHeader
