import React, { useContext } from 'react'
import classNames from 'classnames'
import { WindmillContext } from './WindmillContext'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const CardBody = React.forwardRef<HTMLDivElement, Props>(function CardBody(props, ref) {
  const { className, children, ...other } = props
  const {
    theme: { cardBody },
  } = useContext(WindmillContext)

  const baseStyle = cardBody.base

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default CardBody
