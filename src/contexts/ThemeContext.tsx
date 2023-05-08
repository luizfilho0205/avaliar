import React, { createContext, useState } from 'react'
import type { ReactNode } from 'react'

interface ThemeContextProps {
  theme: 'light' | 'dark'
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
  palette: {
    dark: {
      backgroundColor: string
      surfaceContainer: string
      color: string
    }
    light: {
      backgroundColor: string
      surfaceContainer: string
      color: string
    }
  }
  typography: {
    fontSize: string
    fontFamily: string
  }
  shadows: {
    dark: string[]
    light: string[]
  }
  shape: {
    borderRadius: string
  }
  spacing: {
    padding: string
  }
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
)

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const value = {
    theme,
    setTheme,
    palette: {
      dark: {
        backgroundColor: '#424242',
        surfaceContainer: '#616161',
        surface: '#424242',
        color: '#FAFAFA'
      },
      light: {
        backgroundColor: '#ECEFF1',
        surfaceContainer: '#CFD8DC',
        surface: '#ECEFF1',
        color: '#37474F'
      }
    },
    typography: {
      fontSize: 'calc(60% + 0.8vmin)',
      fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
    },
    shadows: {
      dark: [
        'none',
        '0px -1px 4px 0px #9E9E9E, 0px 0px 4px -2px #9E9E9E',
        '19px 19px 38px #9E9E9E, -19px -19px 38px #9E9E9E',
        '0px 0px 8px 0px #9E9E9E',
        '0px 0px 4px 1px #9E9E9E, 0px 0px 5px 2px #BDBDBD'
      ],
      light: [
        'none',
        '0px -8px 18px #B0BEC5',
        '0px 16px 19px #B0BEC5, 0px -16px 19px #B0BEC5',
        '0px 0px 8px 0px #B0BEC5',
        '0px 0px 4px 1px #B0BEC5, 0px 0px 5px 2px #90A4AE'
      ]
    },
    shape: {
      borderRadius: '8px'
    },
    spacing: {
      padding: '1rem'
    }
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
