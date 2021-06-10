import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'
import {
  borders,
  color,
  flexbox,
  layout,
  space,
  typography,
  BorderProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  TypographyProps,
} from 'styled-system'

export type BoxProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps & {
    center?: boolean
    row?: boolean
    marginHorizontal?: number
    paddingHorizontal?: number
  }

export type SpanProps = ColorProps &
  TypographyProps &
  SpaceProps & {
    center?: boolean
  }

const boxStyles = css<BoxProps>`
  ${borders}
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${(props) => props.center && `align-items: center; justify-content: center`}
`
export const Box = styled.View<BoxProps & { center?: boolean }>`
  ${boxStyles};
  ${({ center }) => center && `align-items: center; justify-content: center`};
  ${({ row }) =>
    row &&
    css`
      flex-direction: row;
    `};
`

export const Row = styled(Box)({
  flexDirection: 'row',
})

export const SafeAreaBox = styled(SafeAreaView)<BoxProps>`
  ${boxStyles}
`

export const Flex = styled(Box)<{ center?: boolean }>`
  flex: 1;
`

export const SafeAreaFlex = styled(SafeAreaBox)<{ center?: boolean }>`
  flex: 1;
`

export const KeyboardAvoidingBox = styled.KeyboardAvoidingView<BoxProps>`
  ${boxStyles}
`

export const StyledTouchableOpacity = styled.TouchableOpacity<BoxProps>`
  ${boxStyles};
`
StyledTouchableOpacity.defaultProps = {
  activeOpacity: 0.7,
}

export const ScrollBox = styled.ScrollView<BoxProps>`
  ${boxStyles}
`

export const StyledTouchableWithoutFeedback = styled.TouchableWithoutFeedback<BoxProps>`
  ${boxStyles}
`

export const StyledBaseInput = styled.TextInput<
  BoxProps & SpanProps & { focus?: boolean; error?: boolean }
>`
  ${boxStyles}
  ${typography}
  ${space}
  ${color}
  ${({ center }) => center && `text-align: center`}
`

export const Span = styled.Text<SpanProps>`
  ${typography}
  ${space}
  ${color}
  ${({ center }) => center && `text-align: center`}
  font-family: 'Roboto-Medium'
`

export const ImageBox = styled.Image`
  ${boxStyles}
`

export const StyledFlatList = styled.FlatList`
  ${boxStyles}
`
