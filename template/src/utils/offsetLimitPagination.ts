import { FieldPolicy } from '@apollo/client'
import { uniqBy } from 'lodash'

/**
 * Just fork of https://github.com/apollographql/apollo-client/blob/7767f466bbbf695c5908cf97284d9af4303af5d6/src/utilities/policies/pagination.ts#L28
 * with merge `items` supporting
 */
export const offsetLimitPagination: FieldPolicy['merge'] = (
  existing = {},
  incoming,
  { args },
) => {
  const existingItems = existing?.items || []
  const incomingItems = incoming?.items || []
  const merged = existing ? existingItems.slice(0, incoming?.totalCount) : []
  if (args) {
    const _b = args.offset,
      offset = _b === void 0 ? 0 : _b
    for (let i = 0; i < incomingItems.length; ++i) {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      merged[offset + i] = incomingItems[i]
    }
  } else {
    // eslint-disable-next-line prefer-spread
    merged.push.apply(merged, incomingItems)
  }

  return {
    ...incoming,
    items: uniqBy(merged, '__ref'),
  }
}
