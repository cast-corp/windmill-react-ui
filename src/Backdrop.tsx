import React, { useContext } from 'react'
import classNames from 'classnames'
import { WindmillContext } from './WindmillContext'

export interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {}

const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(props, ref) {
  const { className, ...other } = props
  const {
    theme: { backdrop },
  } = useContext(WindmillContext)

  const baseStyle = backdrop.base

  const cls = classNames(baseStyle, className)
  return <div className={cls} ref={ref} {...other}></div>
})

export default Backdrop
