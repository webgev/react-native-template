import React from 'react'

import { Descriptor, useTranslate } from '~/lib/translate'

import { Span } from '../Primitives'

export interface HeaderTitleProps {
  descriptor: Descriptor
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ descriptor }) => {
  const { t } = useTranslate()

  return <Span>{t(descriptor)}</Span>
}
