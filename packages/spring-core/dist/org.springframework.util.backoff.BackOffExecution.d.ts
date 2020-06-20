declare namespace org {
    namespace springframework {
        namespace util {
            namespace backoff {
                /**
                 * Represent a particular back-off execution.
                 * <p>Implementations do not need to be thread safe.
                 * @author Stephane Nicoll
                 * @since 4.1
                 * @see BackOff
                 */
                // @ts-ignore
                interface BackOffExecution {
                    /**
                     * Return value of {@link #nextBackOff()} that indicates that the operation
                     * should not be retried.
                     */
                    // @ts-ignore
                    
                    /**
                     * Return the number of milliseconds to wait before retrying the operation
                     * or {@link #STOP} ({@value #STOP}) to indicate that no further attempt
                     * should be made for the operation.
                     */
                    // @ts-ignore
                    nextBackOff(): long
                }
            }
        }
    }
}
