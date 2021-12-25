import { css } from 'styled-components/native'

import { spx } from '~/lib/size'

export type TextType = keyof typeof textStyles | null

export const textStyles = {
  H1: css`
    font-size: ${spx(20)};
    text-transform: uppercase;
  `,
}
