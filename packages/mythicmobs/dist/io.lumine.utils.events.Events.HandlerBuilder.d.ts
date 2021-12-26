declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace Events {
                    // @ts-ignore
                    interface HandlerBuilder<T extends Event> {
                        // @ts-ignore
                        expireAfter(p0: number /*long*/, p1: java.util.concurrent.TimeUnit): io.lumine.utils.events.Events.HandlerBuilder<T>
                        // @ts-ignore
                        expireAfter(p0: number /*long*/): io.lumine.utils.events.Events.HandlerBuilder<T>
                        // @ts-ignore
                        exceptionConsumer(p0: java.util.function$.BiConsumer<any, java.lang.Throwable | Error>): io.lumine.utils.events.Events.HandlerBuilder<T>
                        // @ts-ignore
                        filter(p0: java.util.function$.Predicate<T>): io.lumine.utils.events.Events.HandlerBuilder<T>
                        // @ts-ignore
                        withCooldown(p0: io.lumine.utils.Cooldown): io.lumine.utils.events.Events.HandlerBuilder<T>
                        // @ts-ignore
                        withCooldown(p0: io.lumine.utils.Cooldown, p1: java.util.function$.BiConsumer<io.lumine.utils.Cooldown, any>): io.lumine.utils.events.Events.HandlerBuilder<T>
                        // @ts-ignore
                        withCooldown(p0: io.lumine.utils.collections.CooldownCollection<any>): io.lumine.utils.events.Events.HandlerBuilder<T>
                        // @ts-ignore
                        withCooldown(p0: io.lumine.utils.collections.CooldownCollection<any>, p1: java.util.function$.BiConsumer<io.lumine.utils.Cooldown, any>): io.lumine.utils.events.Events.HandlerBuilder<T>
                        // @ts-ignore
                        handler(handler: java.util.function$.Consumer<any>): io.lumine.utils.events.Events.Handler<T>
                        // @ts-ignore
                        handler(p0: java.util.function$.BiConsumer<io.lumine.utils.events.Events.Handler<T>, any>): io.lumine.utils.events.Events.Handler<T>
                    }
                }
            }
        }
    }
}
