import React, { useContext } from 'react'
import classNames from 'classnames'
import { WindmillContext } from './WindmillContext'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const TableFooter = React.forwardRef<HTMLDivElement, Props>(function TableFooter(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableFooter },
  } = useContext(WindmillContext)

  const baseStyle = tableFooter.base

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default TableFooter
