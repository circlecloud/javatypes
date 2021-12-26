declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace functional {
                    namespace merged {
                        // @ts-ignore
                        interface MergedHandlerList<T> extends io.lumine.utils.events.functional.FunctionalHandlerList<T, io.lumine.utils.events.MergedSubscription<T>> {
                            // @ts-ignore
                            consumer(handler: java.util.function$.Consumer<any>): io.lumine.utils.events.function$al.merged.MergedHandlerList<T>
                            // @ts-ignore
                            biConsumer(p0: java.util.function$.BiConsumer<io.lumine.utils.events.MergedSubscription<T>, any>): io.lumine.utils.events.function$al.merged.MergedHandlerList<T>
                        }
                    }
                }
            }
        }
    }
}
