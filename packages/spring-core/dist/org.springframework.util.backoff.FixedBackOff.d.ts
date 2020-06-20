declare namespace org {
    namespace springframework {
        namespace util {
            namespace backoff {
                /**
                 * A simple {@link BackOff} implementation that provides a fixed interval
                 * between two attempts and a maximum number of retries.
                 * @author Stephane Nicoll
                 * @since 4.1
                 */
                // @ts-ignore
                class FixedBackOff extends java.lang.Object implements org.springframework.util.backoff.BackOff {
                    /**
                     * Create an instance with an interval of {@value #DEFAULT_INTERVAL}
                     * ms and an unlimited number of attempts.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create an instance.
                     * @param interval the interval between two attempts
                     * @param maxAttempts the maximum number of attempts
                     */
                    // @ts-ignore
                    constructor(interval: number /*long*/, maxAttempts: number /*long*/)
                    /**
                     * The default recovery interval: 5000 ms = 5 seconds.
                     */
                    // @ts-ignore
                    readonly DEFAULT_INTERVAL: number /*long*/
                    /**
                     * Constant value indicating an unlimited number of attempts.
                     */
                    // @ts-ignore
                    readonly UNLIMITED_ATTEMPTS: number /*long*/
                    /**
                     * Set the interval between two attempts in milliseconds.
                     */
                    // @ts-ignore
                    setInterval(interval: number /*long*/): void
                    /**
                     * Return the interval between two attempts in milliseconds.
                     */
                    // @ts-ignore
                    getInterval(): long
                    /**
                     * Set the maximum number of attempts in milliseconds.
                     */
                    // @ts-ignore
                    setMaxAttempts(maxAttempts: number /*long*/): void
                    /**
                     * Return the maximum number of attempts in milliseconds.
                     */
                    // @ts-ignore
                    getMaxAttempts(): long
                    // @ts-ignore
                    start(): org.springframework.util.backoff.BackOffExecution
                }
            }
        }
    }
}
