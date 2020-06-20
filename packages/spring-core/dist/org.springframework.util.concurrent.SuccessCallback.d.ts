declare namespace org {
    namespace springframework {
        namespace util {
            namespace concurrent {
                /**
                 * Success callback for a {@link ListenableFuture}.
                 * @author Sebastien Deleuze
                 * @since 4.1
                 * @param <T> the result type
                 */
                // @ts-ignore
                interface SuccessCallback<T> {
                    /**
                     * Called when the {@link ListenableFuture} completes with success.
                     * <p>Note that Exceptions raised by this method are ignored.
                     * @param result the result
                     */
                    // @ts-ignore
                    onSuccess(result: T): void
                }
            }
        }
    }
}
