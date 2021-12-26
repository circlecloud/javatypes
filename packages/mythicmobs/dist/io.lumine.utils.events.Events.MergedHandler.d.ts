declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace Events {
                    // @ts-ignore
                    interface MergedHandler<T> extends io.lumine.utils.terminable.Terminable {
                        // @ts-ignore
                        getHandledClass(): java.lang.Class<any>
                        // @ts-ignore
                        getEventClasses(): Array<java.lang.Class<any>>
                        // @ts-ignore
                        isActive(): boolean
                        // @ts-ignore
                        getCallCounter(): number /*long*/
                        // @ts-ignore
                        getExpiryTimeMillis(): java.util.OptionalLong
                        // @ts-ignore
                        unregister(): boolean
                        // @ts-ignore
                        terminate(): boolean
                    }
                }
            }
        }
    }
}
