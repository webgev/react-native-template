import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types'
import { useLayoutEffect } from 'react'

import { Descriptor, useTranslate } from '~/lib'

interface Props {
  title?: Descriptor
  options?: Partial<StackHeaderOptions & StackNavigationOptions>
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
