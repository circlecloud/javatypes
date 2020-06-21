declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Convenient interface when working against auto-recovery channels.
             * @since 4.0.0
             */
            // @ts-ignore
            interface RecoverableChannel extends com.rabbitmq.client.Recoverable, com.rabbitmq.client.Channel {
            }
        }
    }
}
