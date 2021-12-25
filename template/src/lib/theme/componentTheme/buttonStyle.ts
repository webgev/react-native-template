import { s } from 'react-native-size-matters'

import { colors } from '../colors'

export const buttonStyle = {
  container: {
    alignItems: 'flex-start',
  },
  button: {
    paddingVertical: s(10),
    paddingHorizontal: s(20),
    borderRadius: s(12),
    backgroundColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: colors.secondary,
  },

  text: {
    color: colors.textPrimary,
  },

  hide: {
    opacity: 0,
  },

  indicator: {
    position: 'absolute',
  },
} as const
