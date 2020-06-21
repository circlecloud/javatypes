declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Thrown when application tries to perform an action on connection/channel
             * which was already closed
             */
            // @ts-ignore
            class AlreadyClosedException extends com.rabbitmq.client.ShutdownSignalException {
                // @ts-ignore
                constructor(sse: com.rabbitmq.client.ShutdownSignalException)
                // @ts-ignore
                constructor(sse: com.rabbitmq.client.ShutdownSignalException, cause: java.lang.Throwable | Error)
            }
        }
    }
}
