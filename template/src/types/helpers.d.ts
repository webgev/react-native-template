type PromiseResolvedType<T> = T extends Promise<infer R> ? R : never

type AsyncReturnType<T extends (...args: never) => Promise<unknown>> =
  PromiseResolvedType<ReturnType<T>>
