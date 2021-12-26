declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                // @ts-ignore
                interface MergedSubscription<T> extends io.lumine.utils.events.Subscription {
                    // @ts-ignore
                    getHandledClass(): java.lang.Class<any>
                    // @ts-ignore
                    getEventClasses(): Array<java.lang.Class<any>>
                }
            }
        }
    }
}
