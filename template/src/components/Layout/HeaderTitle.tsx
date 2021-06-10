import React from 'react'

import { Descriptor, useTranslate } from '~/lib/translate'

export interface HeaderTitleProps {
  descriptor: Descriptor
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ descriptor }) => {
  const { t } = useTranslate()

  return <>{t(descriptor)}</>
}
