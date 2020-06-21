declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * A RecoveryListener receives notifications about completed automatic connection
             * recovery.
             * @since 3.3.0
             */
            // @ts-ignore
            interface RecoveryListener {
                /**
                 * Invoked when automatic connection recovery has completed.
                 * This includes topology recovery if it was enabled.
                 * @param recoverable a {#link Recoverable} connection.
                 */
                // @ts-ignore
                handleRecovery(recoverable: com.rabbitmq.client.Recoverable): void
                /**
                 * Invoked before automatic connection recovery starts.
                 * This means no recovery steps were performed at this point
                 * during recovery process.
                 * @param recoverable a {#link Recoverable} connection.
                 */
                // @ts-ignore
                handleRecoveryStarted(recoverable: com.rabbitmq.client.Recoverable): void
            }
        }
    }
}
