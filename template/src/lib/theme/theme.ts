import { extendTheme } from 'native-base'

export const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: 22,
      },
    },
  },
  colors: {
    backgroundColor: 'white',
    headerBackgroundColor: 'blue.400',
    headerTitle: 'white',
  },
})

// 2. Get the type of the CustomTheme
type CustomThemeType = typeof theme

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
