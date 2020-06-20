declare namespace org {
    namespace springframework {
        namespace util {
            namespace backoff {
                /**
                 * Provide a {@link BackOffExecution} that indicates the rate at which
                 * an operation should be retried.
                 * <p>Users of this interface are expected to use it like this:
                 * <pre class="code">
                 * BackOffExecution exec = backOff.start();
                 * // In the operation recovery/retry loop:
                 * long waitInterval = exec.nextBackOff();
                 * if (waitInterval == BackOffExecution.STOP) {
                 * // do not retry operation
                 * }
                 * else {
                 * // sleep, e.g. Thread.sleep(waitInterval)
                 * // retry operation
                 * }
                 * }</pre>
                 * Once the underlying operation has completed successfully,
                 * the execution instance can be simply discarded.
                 * @author Stephane Nicoll
                 * @since 4.1
                 * @see BackOffExecution
                 */
                // @ts-ignore
                interface BackOff {
                    /**
                     * Start a new back off execution.
                     * @return a fresh {#link BackOffExecution} ready to be used
                     */
                    // @ts-ignore
                    start(): org.springframework.util.backoff.BackOffExecution
                }
            }
        }
    }
}
