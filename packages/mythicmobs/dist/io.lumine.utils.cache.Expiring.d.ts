declare namespace io {
    namespace lumine {
        namespace utils {
            namespace cache {
                // @ts-ignore
                class Expiring<T> extends java.lang.Object implements java.util.function.Supplier<T> {
                    // @ts-ignore
                    public static suppliedBy<T>(supplier: java.util.function$.Supplier<T>, duration: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.cache.Expiring<T>
                    // @ts-ignore
                    public get(): T
                }
            }
        }
    }
}
