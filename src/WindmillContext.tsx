import React from 'react'
import defaultTheme from './themes/default'

interface WindmillContextInterface {
  theme: typeof defaultTheme
  mode?: Mode
  toggleMode?: any
}

export const WindmillContext = React.createContext<WindmillContextInterface>({
  theme: defaultTheme,
})

interface WindmillProviderProps {
  children: React.ReactNode
  value?: any
}

export const WindmillProvider: React.FC<WindmillProviderProps> = ({ children, value }) => {
  return <WindmillContext.Provider value={value}>{children}</WindmillContext.Provider>
}
