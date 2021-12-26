declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace functional {
                    // @ts-ignore
                    interface SubscriptionBuilder<T> {
                        // @ts-ignore
                        readonly DEFAULT_EXCEPTION_CONSUMER: java.util.function$.BiConsumer<java.lang.Object | any, java.lang.Throwable | Error>
                        // @ts-ignore
                        expireIf(p0: java.util.function$.Predicate<T>): io.lumine.utils.events.function$al.SubscriptionBuilder<T>
                        // @ts-ignore
                        expireAfter(p0: number /*long*/, p1: java.util.concurrent.TimeUnit): io.lumine.utils.events.function$al.SubscriptionBuilder<T>
                        // @ts-ignore
                        expireAfter(p0: number /*long*/): io.lumine.utils.events.function$al.SubscriptionBuilder<T>
                        // @ts-ignore
                        filter(p0: java.util.function$.Predicate<T>): io.lumine.utils.events.function$al.SubscriptionBuilder<T>
                    }
                }
            }
        }
    }
}
