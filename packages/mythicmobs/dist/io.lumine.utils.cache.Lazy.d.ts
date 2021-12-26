declare namespace io {
    namespace lumine {
        namespace utils {
            namespace cache {
                // @ts-ignore
                class Lazy<T> extends java.lang.Object implements java.util.function.Supplier<T> {
                    // @ts-ignore
                    public static suppliedBy<T>(supplier: java.util.function$.Supplier<T>): io.lumine.utils.cache.Lazy<T>
                    // @ts-ignore
                    public static of<T>(value: T): io.lumine.utils.cache.Lazy<T>
                    // @ts-ignore
                    public get(): T
                }
            }
        }
    }
}
