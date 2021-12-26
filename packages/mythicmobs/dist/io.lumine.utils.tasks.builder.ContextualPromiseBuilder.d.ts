declare namespace io {
    namespace lumine {
        namespace utils {
            namespace tasks {
                namespace builder {
                    // @ts-ignore
                    interface ContextualPromiseBuilder {
                        // @ts-ignore
                        supply<T>(p0: java.util.function$.Supplier<T>): io.lumine.utils.promise.Promise<T>
                        // @ts-ignore
                        call<T>(p0: java.util.concurrent.Callable<T>): io.lumine.utils.promise.Promise<T>
                        // @ts-ignore
                        run(p0: java.lang.Runnable): io.lumine.utils.promise.Promise<java.lang.Void>
                    }
                }
            }
        }
    }
}
