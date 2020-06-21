declare namespace org {
    namespace springframework {
        namespace util {
            namespace concurrent {
                /**
                 * Failure callback for a {@link ListenableFuture}.
                 * @author Sebastien Deleuze
                 * @since 4.1
                 */
                // @ts-ignore
                interface FailureCallback {
                    /**
                     * Called when the {@link ListenableFuture} completes with failure.
                     * <p>Note that Exceptions raised by this method are ignored.
                     * @param ex the failure
                     */
                    // @ts-ignore
                    onFailure(ex: java.lang.Throwable | Error): void
                }
            }
        }
    }
}
