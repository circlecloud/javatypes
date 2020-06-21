declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace RecoveryDelayHandler {
                /**
                 * Backoff implementation of {@link RecoveryDelayHandler} that uses the Fibonacci sequence (by default) to increase the recovery delay time after each failed attempt.
                 * You can optionally use your own backoff sequence.
                 */
                // @ts-ignore
                class ExponentialBackoffDelayHandler extends java.lang.Object implements com.rabbitmq.client.RecoveryDelayHandler {
                    /**
                     * Default Constructor. Uses the following sequence: 2000, 3000, 5000, 8000, 13000, 21000, 34000
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructor for passing your own backoff sequence
                     * @param sequence
                     *           List of recovery delay values in milliseconds.
                     * @throws IllegalArgumentException if the sequence is null or empty
                     */
                    // @ts-ignore
                    constructor(sequence: java.util.List<java.lang.Long | number> | Array<java.lang.Long | number>)
                    // @ts-ignore
                    public getDelay(recoveryAttempts: number /*int*/): number /*long*/
                }
            }
        }
    }
}
