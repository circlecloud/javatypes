declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace functional {
                    namespace single {
                        // @ts-ignore
                        interface SingleSubscriptionBuilder<T extends Event> extends io.lumine.utils.events.functional.SubscriptionBuilder<T> {
                            // @ts-ignore
                            newBuilder<T extends Event>(eventClass: java.lang.Class<T>): io.lumine.utils.events.function$al.single.SingleSubscriptionBuilder<T>
                            // @ts-ignore
                            newBuilder<T extends Event>(eventClass: java.lang.Class<T>, priority: EventPriority): io.lumine.utils.events.function$al.single.SingleSubscriptionBuilder<T>
                            // @ts-ignore
                            expireIf(predicate: java.util.function$.Predicate<T>): io.lumine.utils.events.function$al.single.SingleSubscriptionBuilder<T>
                            // @ts-ignore
                            expireAfter(duration: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.events.function$al.single.SingleSubscriptionBuilder<T>
                            // @ts-ignore
                            expireAfter(maxCalls: number /*long*/): io.lumine.utils.events.function$al.single.SingleSubscriptionBuilder<T>
                            // @ts-ignore
                            filter(p0: java.util.function$.Predicate<T>): io.lumine.utils.events.function$al.single.SingleSubscriptionBuilder<T>
                            // @ts-ignore
                            expireIf(p0: java.util.function$.BiPredicate<io.lumine.utils.events.SingleSubscription<T>, T>, ...p1: io.lumine.utils.events.functional.ExpiryTestStage[] | io.lumine.utils.events.function$al.ExpiryTestStage[]): io.lumine.utils.events.function$al.single.SingleSubscriptionBuilder<T>
                            // @ts-ignore
                            exceptionConsumer(p0: java.util.function$.BiConsumer<any, java.lang.Throwable | Error>): io.lumine.utils.events.function$al.single.SingleSubscriptionBuilder<T>
                            // @ts-ignore
                            handlers(): io.lumine.utils.events.function$al.single.SingleHandlerList<T>
                            // @ts-ignore
                            handler(handler: java.util.function$.Consumer<any>): io.lumine.utils.events.SingleSubscription<T>
                            // @ts-ignore
                            biHandler(handler: java.util.function$.BiConsumer<io.lumine.utils.events.SingleSubscription<T>, any>): io.lumine.utils.events.SingleSubscription<T>
                        }
                    }
                }
            }
        }
    }
}
