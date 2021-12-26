declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                // @ts-ignore
                interface SingleSubscription<T extends Event> extends io.lumine.utils.events.Subscription {
                    // @ts-ignore
                    getEventClass(): java.lang.Class<T>
                }
            }
        }
    }
}
