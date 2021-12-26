declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace functional {
                    // @ts-ignore
                    interface FunctionalHandlerList<T, R> {
                        // @ts-ignore
                        consumer(p0: java.util.function$.Consumer<any>): io.lumine.utils.events.function$al.FunctionalHandlerList<T, R>
                        // @ts-ignore
                        biConsumer(p0: java.util.function$.BiConsumer<R, any>): io.lumine.utils.events.function$al.FunctionalHandlerList<T, R>
                        // @ts-ignore
                        register(): R
                    }
                }
            }
        }
    }
}
