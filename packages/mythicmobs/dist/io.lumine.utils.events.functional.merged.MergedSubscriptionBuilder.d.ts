declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace functional {
                    namespace merged {
                        // @ts-ignore
                        interface MergedSubscriptionBuilder<T> extends io.lumine.utils.events.functional.SubscriptionBuilder<T> {
                            // @ts-ignore
                            newBuilder<T>(handledClass: java.lang.Class<T>): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<T>
                            // @ts-ignore
                            newBuilder<T>(type: object): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<T>
                            // @ts-ignore
                            newBuilder<S extends Event>(superClass: java.lang.Class<S>, ...eventClasses: java.lang.Class<any>[]): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<S>
                            // @ts-ignore
                            newBuilder<S extends Event>(superClass: java.lang.Class<S>, priority: EventPriority, ...eventClasses: java.lang.Class<any>[]): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<S>
                            // @ts-ignore
                            expireIf(predicate: java.util.function$.Predicate<T>): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<T>
                            // @ts-ignore
                            expireAfter(duration: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<T>
                            // @ts-ignore
                            expireAfter(maxCalls: number /*long*/): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<T>
                            // @ts-ignore
                            filter(p0: java.util.function$.Predicate<T>): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<T>
                            // @ts-ignore
                            expireIf(p0: java.util.function$.BiPredicate<io.lumine.utils.events.MergedSubscription<T>, T>, ...p1: io.lumine.utils.events.functional.ExpiryTestStage[] | io.lumine.utils.events.function$al.ExpiryTestStage[]): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<T>
                            // @ts-ignore
                            bindEvent<E extends Event>(p0: java.lang.Class<E>, p1: java.util.function$.Function<E, T>): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<T>
                            // @ts-ignore
                            bindEvent<E extends Event>(p0: java.lang.Class<E>, p1: EventPriority, p2: java.util.function$.Function<E, T>): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<T>
                            // @ts-ignore
                            exceptionConsumer(p0: java.util.function$.BiConsumer<Event, java.lang.Throwable | Error>): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<T>
                            // @ts-ignore
                            handlers(): io.lumine.utils.events.function$al.merged.MergedHandlerList<T>
                            // @ts-ignore
                            handler(handler: java.util.function$.Consumer<any>): io.lumine.utils.events.MergedSubscription<T>
                            // @ts-ignore
                            biHandler(handler: java.util.function$.BiConsumer<io.lumine.utils.events.MergedSubscription<T>, any>): io.lumine.utils.events.MergedSubscription<T>
                        }
                    }
                }
            }
        }
    }
}
