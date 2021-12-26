declare namespace io {
    namespace lumine {
        namespace utils {
            namespace metadata {
                // @ts-ignore
                class SoftValue<T> extends java.lang.Object implements io.lumine.utils.metadata.TransientValue<T> {
                    // @ts-ignore
                    public static of<T>(value: T): io.lumine.utils.metadata.SoftValue<T>
                    // @ts-ignore
                    public getOrNull(): T
                    // @ts-ignore
                    public shouldExpire(): boolean
                }
            }
        }
    }
}
