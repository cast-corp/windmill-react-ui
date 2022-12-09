import React, { useContext } from 'react'
import classNames from 'classnames'
import { WindmillContext } from './WindmillContext'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ModalBody = React.forwardRef<HTMLDivElement, Props>(function ModalBody(props, ref) {
  const { children, className, ...other } = props
  const {
    theme: { modalBody },
  } = useContext(WindmillContext)

  const baseStyle = modalBody.base

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default ModalBody
