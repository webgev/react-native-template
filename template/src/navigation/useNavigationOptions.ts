import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { NativeStackHeaderProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { useLayoutEffect } from 'react'

import { Descriptor, useTranslate } from '~/lib/translate'

interface Props {
  title?: Descriptor
  options?: Partial<NativeStackHeaderProps & NativeStackNavigationOptions>
}

export const useNavigationOptions = ({ title, options }: Props) => {
  const { t } = useTranslate()
  const { setOptions } = useNavigation()

  useLayoutEffect(() => {
    setOptions({
      headerTitle: title ? t(title) : undefined,
      ...options,
    })
  }, [setOptions, t, title, options])
}
