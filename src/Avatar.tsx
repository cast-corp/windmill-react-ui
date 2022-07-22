import React, { ImgHTMLAttributes, useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the avatar
   */
  size?: 'large' | 'regular' | 'small'
  /**
   * Alternative text for the avatar image
   */
  alt?: string
  /**
   * The source for the avatar image
   */
  src: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
  const { size = 'regular', src, alt, className, ...other } = props
  const {
    theme: { avatar },
  } = useContext(ThemeContext)

  const baseStyle = avatar.base
  const sizeStyles = {
    large: avatar.size.large,
    regular: avatar.size.regular,
    small: avatar.size.small,
  }

  const cls = classNames(baseStyle, sizeStyles[size], className)

  const imgProps: Pick<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> = { src }
  if (alt !== undefined) {
    imgProps.alt = alt
  }
  return (
    <div className={cls} ref={ref} {...other}>
      <img {...imgProps} className="object-cover w-full h-full rounded-full" loading="lazy" />
      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
    </div>
  )
})

export default Avatar
