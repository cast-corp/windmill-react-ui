import React, { useContext } from 'react'
import classNames from 'classnames'
import { WindmillContext } from './WindmillContext'

interface Props extends React.HTMLAttributes<HTMLTableRowElement> {}

const TableRow = React.forwardRef<HTMLTableRowElement, Props>(function TableRow(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableRow },
  } = useContext(WindmillContext)

  const baseStyle = tableRow.base

  const cls = classNames(baseStyle, className)

  return (
    <tr className={cls} ref={ref} {...other}>
      {children}
    </tr>
  )
})

export default TableRow
