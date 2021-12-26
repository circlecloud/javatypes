declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace Events {
                    // @ts-ignore
                    interface MergedHandlerBuilder<T> {
                        // @ts-ignore
                        bindEvent<E extends Event>(p0: java.lang.Class<E>, p1: java.util.function$.Function<E, T>): io.lumine.utils.events.Events.MergedHandlerBuilder<T>
                        // @ts-ignore
                        bindEvent<E extends Event>(p0: java.lang.Class<E>, p1: EventPriority, p2: java.util.function$.Function<E, T>): io.lumine.utils.events.Events.MergedHandlerBuilder<T>
                        // @ts-ignore
                        expireAfter(p0: number /*long*/, p1: java.util.concurrent.TimeUnit): io.lumine.utils.events.Events.MergedHandlerBuilder<T>
                        // @ts-ignore
                        expireAfter(p0: number /*long*/): io.lumine.utils.events.Events.MergedHandlerBuilder<T>
                        // @ts-ignore
                        exceptionConsumer(p0: java.util.function$.BiConsumer<Event, java.lang.Throwable | Error>): io.lumine.utils.events.Events.MergedHandlerBuilder<T>
                        // @ts-ignore
                        filter(p0: java.util.function$.Predicate<T>): io.lumine.utils.events.Events.MergedHandlerBuilder<T>
                        // @ts-ignore
                        withCooldown(p0: io.lumine.utils.Cooldown): io.lumine.utils.events.Events.MergedHandlerBuilder<T>
                        // @ts-ignore
                        withCooldown(p0: io.lumine.utils.Cooldown, p1: java.util.function$.BiConsumer<io.lumine.utils.Cooldown, any>): io.lumine.utils.events.Events.MergedHandlerBuilder<T>
                        // @ts-ignore
                        withCooldown(p0: io.lumine.utils.collections.CooldownCollection<any>): io.lumine.utils.events.Events.MergedHandlerBuilder<T>
                        // @ts-ignore
                        withCooldown(p0: io.lumine.utils.collections.CooldownCollection<any>, p1: java.util.function$.BiConsumer<io.lumine.utils.Cooldown, any>): io.lumine.utils.events.Events.MergedHandlerBuilder<T>
                        // @ts-ignore
                        handler(handler: java.util.function$.Consumer<any>): io.lumine.utils.events.Events.MergedHandler<T>
                        // @ts-ignore
                        handler(p0: java.util.function$.BiConsumer<io.lumine.utils.events.Events.MergedHandler<T>, any>): io.lumine.utils.events.Events.MergedHandler<T>
                    }
                }
            }
        }
    }
}
