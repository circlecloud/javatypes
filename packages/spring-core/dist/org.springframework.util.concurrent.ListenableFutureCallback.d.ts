declare namespace org {
    namespace springframework {
        namespace util {
            namespace concurrent {
                /**
                 * Callback mechanism for the outcome, success or failure, from a
                 * {@link ListenableFuture}.
                 * @author Arjen Poutsma
                 * @author Sebastien Deleuze
                 * @since 4.0
                 * @param <T> the result type
                 */
                // @ts-ignore
                interface ListenableFutureCallback<T> extends org.springframework.util.concurrent.SuccessCallback<T>, org.springframework.util.concurrent.FailureCallback {
                }
            }
        }
    }
}
