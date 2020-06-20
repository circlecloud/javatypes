declare namespace org {
    namespace springframework {
        namespace amqp {
            /**
             * An exception that wraps an exception thrown by the server in a
             * request/reply scenario.
             * @author Gary Russell
             * @since 2.0
             */
            // @ts-ignore
            class AmqpRemoteException extends org.springframework.amqp.AmqpException {
                // @ts-ignore
                constructor(cause: Error)
            }
        }
    }
}
