declare namespace io {
    namespace lumine {
        namespace utils {
            namespace metadata {
                // @ts-ignore
                interface TransientValue<T> {
                    // @ts-ignore
                    getOrNull(): T
                    // @ts-ignore
                    shouldExpire(): boolean
                }
            }
        }
    }
}
