declare namespace io {
    namespace lumine {
        namespace utils {
            namespace cache {
                // @ts-ignore
                class Cache<T> extends java.lang.Object implements java.util.function.Supplier<T> {
                    // @ts-ignore
                    public static suppliedBy<T>(supplier: java.util.function$.Supplier<T>): io.lumine.utils.cache.Cache<T>
                    // @ts-ignore
                    public get(): T
                    // @ts-ignore
                    public getIfPresent(): java.util.Optional<T>
                    // @ts-ignore
                    public invalidate(): void
                }
            }
        }
    }
}
