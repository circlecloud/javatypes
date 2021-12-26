declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace functional {
                    namespace single {
                        // @ts-ignore
                        interface SingleHandlerList<T extends Event> extends io.lumine.utils.events.functional.FunctionalHandlerList<T, io.lumine.utils.events.SingleSubscription<T>> {
                            // @ts-ignore
                            consumer(handler: java.util.function$.Consumer<any>): io.lumine.utils.events.function$al.single.SingleHandlerList<T>
                            // @ts-ignore
                            biConsumer(p0: java.util.function$.BiConsumer<io.lumine.utils.events.SingleSubscription<T>, any>): io.lumine.utils.events.function$al.single.SingleHandlerList<T>
                        }
                    }
                }
            }
        }
    }
}
