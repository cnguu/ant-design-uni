type NativeType = null | number | string | boolean | symbol | ((...args: any[]) => any)

type InferDefault<P, T> = ((props: P) => T & {}) | (T extends NativeType ? T : never)

export type InferDefaults<T> = {
  [K in keyof T]?: InferDefault<T, T[K]>
}
