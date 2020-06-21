declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Convenient interface when working against auto-recovery connections.
             * @since 4.0.0
             */
            // @ts-ignore
            interface RecoverableConnection extends com.rabbitmq.client.Recoverable, com.rabbitmq.client.Connection {
            }
        }
    }
}
