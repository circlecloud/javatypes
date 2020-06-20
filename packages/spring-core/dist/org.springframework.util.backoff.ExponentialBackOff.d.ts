declare namespace org {
    namespace springframework {
        namespace util {
            namespace backoff {
                /**
                 * Implementation of {@link BackOff} that increases the back off period for each
                 * retry attempt. When the interval has reached the {@link #setMaxInterval(long)
                 * max interval}, it is no longer increased. Stops retrying once the
                 * {@link #setMaxElapsedTime(long) max elapsed time} has been reached.
                 * <p>Example: The default interval is {@value #DEFAULT_INITIAL_INTERVAL} ms,
                 * the default multiplier is {@value #DEFAULT_MULTIPLIER}, and the default max
                 * interval is {@value #DEFAULT_MAX_INTERVAL}. For 10 attempts the sequence will be
                 * as follows:
                 * <pre>
                 * request#     back off
                 * 1              2000
                 * 2              3000
                 * 3              4500
                 * 4              6750
                 * 5             10125
                 * 6             15187
                 * 7             22780
                 * 8             30000
                 * 9             30000
                 * 10             30000
                 * </pre>
                 * <p>Note that the default max elapsed time is {@link Long#MAX_VALUE}. Use
                 * {@link #setMaxElapsedTime(long)} to limit the maximum length of time
                 * that an instance should accumulate before returning
                 * {@link BackOffExecution#STOP}.
                 * @author Stephane Nicoll
                 * @since 4.1
                 */
                // @ts-ignore
                class ExponentialBackOff extends java.lang.Object implements org.springframework.util.backoff.BackOff {
                    /**
                     * Create an instance with the default settings.
                     * @see #DEFAULT_INITIAL_INTERVAL
                     * @see #DEFAULT_MULTIPLIER
                     * @see #DEFAULT_MAX_INTERVAL
                     * @see #DEFAULT_MAX_ELAPSED_TIME
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create an instance with the supplied settings.
                     * @param initialInterval the initial interval in milliseconds
                     * @param multiplier the multiplier (should be greater than or equal to 1)
                     */
                    // @ts-ignore
                    constructor(initialInterval: number /*long*/, multiplier: number /*double*/)
                    /**
                     * The default initial interval.
                     */
                    // @ts-ignore
                    readonly DEFAULT_INITIAL_INTERVAL: number /*long*/
                    /**
                     * The default multiplier (increases the interval by 50%).
                     */
                    // @ts-ignore
                    readonly DEFAULT_MULTIPLIER: number /*double*/
                    /**
                     * The default maximum back off time.
                     */
                    // @ts-ignore
                    readonly DEFAULT_MAX_INTERVAL: number /*long*/
                    /**
                     * The default maximum elapsed time.
                     */
                    // @ts-ignore
                    readonly DEFAULT_MAX_ELAPSED_TIME: number /*long*/
                    /**
                     * The initial interval in milliseconds.
                     */
                    // @ts-ignore
                    setInitialInterval(initialInterval: number /*long*/): void
                    /**
                     * Return the initial interval in milliseconds.
                     */
                    // @ts-ignore
                    getInitialInterval(): long
                    /**
                     * The value to multiply the current interval by for each retry attempt.
                     */
                    // @ts-ignore
                    setMultiplier(multiplier: number /*double*/): void
                    /**
                     * Return the value to multiply the current interval by for each retry attempt.
                     */
                    // @ts-ignore
                    getMultiplier(): double
                    /**
                     * The maximum back off time.
                     */
                    // @ts-ignore
                    setMaxInterval(maxInterval: number /*long*/): void
                    /**
                     * Return the maximum back off time.
                     */
                    // @ts-ignore
                    getMaxInterval(): long
                    /**
                     * The maximum elapsed time in milliseconds after which a call to
                     * {@link BackOffExecution#nextBackOff()} returns {@link BackOffExecution#STOP}.
                     */
                    // @ts-ignore
                    setMaxElapsedTime(maxElapsedTime: number /*long*/): void
                    /**
                     * Return the maximum elapsed time in milliseconds after which a call to
                     * {@link BackOffExecution#nextBackOff()} returns {@link BackOffExecution#STOP}.
                     */
                    // @ts-ignore
                    getMaxElapsedTime(): long
                    // @ts-ignore
                    start(): org.springframework.util.backoff.BackOffExecution
                }
            }
        }
    }
}
