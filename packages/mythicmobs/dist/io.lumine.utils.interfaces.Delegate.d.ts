declare namespace io {
    namespace lumine {
        namespace utils {
            namespace interfaces {
                // @ts-ignore
                interface Delegate<T> {
                    // @ts-ignore
                    resolve(obj: java.lang.Object | any): any
                    // @ts-ignore
                    getDelegate(): T
                }
            }
        }
    }
}
