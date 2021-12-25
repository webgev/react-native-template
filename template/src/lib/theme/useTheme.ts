import { useTheme as useThemeBase, getColor } from 'native-base'

export const useTheme = () => {
  const theme = useThemeBase()

  return {
    ...theme,
    getColor: (color: string) => getColor(color, theme.colors, theme),
  }
}
