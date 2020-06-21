declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Indicates an exception thrown during topology recovery.
             * @see com.rabbitmq.client.ConnectionFactory#setTopologyRecoveryEnabled(boolean)
             * @since 3.3.0
             */
            // @ts-ignore
            class TopologyRecoveryException extends java.lang.Exception {
                // @ts-ignore
                constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
            }
        }
    }
}
