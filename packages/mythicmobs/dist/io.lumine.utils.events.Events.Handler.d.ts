declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace Events {
                    // @ts-ignore
                    interface Handler<T> extends io.lumine.utils.terminable.Terminable {
                        // @ts-ignore
                        getEventClass(): java.lang.Class<T>
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
