declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                /**
                 * Represents a method which may be called once a result has been computed
                 * asynchronously.
                 * @param <V> the type of result
                 */
                // @ts-ignore
                interface Callback<V> {
                    /**
                     * Called when the result is done.
                     * @param result the result of the computation
                     * @param error the error(s) that occurred, if any
                     */
                    // @ts-ignore
                    done(result: V, error: java.lang.Throwable | Error): void
                }
            }
        }
    }
}
