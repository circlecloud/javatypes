declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * A RecoveryDelayHandler is used to tell automatic recovery how long to sleep between reconnect attempts.
             * @since 4.3.0
             */
            // @ts-ignore
            interface RecoveryDelayHandler {
                /**
                 * Get the time to sleep (in milliseconds) before attempting to reconnect and recover again.
                 * This method will be called with recoveryAttempts=0 before the first recovery attempt and then again after each failed recovery.
                 * @param recoveryAttempts
                 *           The number of recovery attempts so far.
                 * @return the delay in milliseconds
                 */
                // @ts-ignore
                getDelay(recoveryAttempts: number /*int*/): number /*long*/
            }
        }
    }
}
