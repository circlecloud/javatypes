declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace RecoveryDelayHandler {
                /**
                 * Basic implementation of {@link RecoveryDelayHandler} that returns the {@link ConnectionFactory#getNetworkRecoveryInterval() network recovery interval} each time.
                 */
                // @ts-ignore
                class DefaultRecoveryDelayHandler extends java.lang.Object implements com.rabbitmq.client.RecoveryDelayHandler {
                    /**
                     * Default Constructor
                     * @param networkRecoveryInterval
                     *           recovery delay time in millis
                     */
                    // @ts-ignore
                    constructor(networkRecoveryInterval: number /*long*/)
                    // @ts-ignore
                    public getDelay(recoveryAttempts: number /*int*/): number /*long*/
                }
            }
        }
    }
}
