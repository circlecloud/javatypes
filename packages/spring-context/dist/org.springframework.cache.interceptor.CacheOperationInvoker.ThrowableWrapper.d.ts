declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                namespace CacheOperationInvoker {
                    /**
                     * Wrap any exception thrown while invoking {@link #invoke()}.
                     */
                    // @ts-ignore
                    class ThrowableWrapper extends java.lang.RuntimeException {
                        // @ts-ignore
                        constructor(original: java.lang.Throwable | Error)
                        // @ts-ignore
                        getOriginal(): Error
                    }
                }
            }
        }
    }
}
