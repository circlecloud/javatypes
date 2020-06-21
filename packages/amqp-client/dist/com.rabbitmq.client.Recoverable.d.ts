declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Provides a way to register (network, AMQP 0-9-1) connection recovery
             * callbacks.
             * When connection recovery is enabled via {@link ConnectionFactory},
             * {@link ConnectionFactory#newConnection()} and {@link Connection#createChannel()}
             * return {@link Recoverable} connections and channels.
             * @see com.rabbitmq.client.impl.recovery.AutorecoveringConnection
             * @see com.rabbitmq.client.impl.recovery.AutorecoveringChannel
             */
            // @ts-ignore
            interface Recoverable {
                /**
                 * Registers a connection recovery callback.
                 * @param listener Callback function
                 */
                // @ts-ignore
                addRecoveryListener(listener: com.rabbitmq.client.RecoveryListener): void
                // @ts-ignore
                removeRecoveryListener(listener: com.rabbitmq.client.RecoveryListener): void
            }
        }
    }
}
