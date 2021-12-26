declare namespace io {
    namespace lumine {
        namespace utils {
            namespace metadata {
                // @ts-ignore
                class ExpiringValue<T> extends java.lang.Object implements io.lumine.utils.metadata.TransientValue<T> {
                    // @ts-ignore
                    public static of<T>(value: T, duration: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.metadata.ExpiringValue<T>
                    // @ts-ignore
                    public getOrNull(): T
                    // @ts-ignore
                    public shouldExpire(): boolean
                }
            }
        }
    }
}
