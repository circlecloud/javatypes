declare namespace org {
    namespace springframework {
        namespace cache {
            namespace Cache {
                /**
                 * Wrapper exception to be thrown from {@link #get(Object, Callable)}
                 * in case of the value loader callback failing with an exception.
                 * @since 4.3
                 */
                // @ts-ignore
                class ValueRetrievalException extends java.lang.RuntimeException {
                    // @ts-ignore
                    constructor(key: java.lang.Object | any, loader: java.util.concurrent.Callable<any>, ex: java.lang.Throwable | Error)
                    // @ts-ignore
                    getKey(): any
                }
            }
        }
    }
}
