declare namespace org {
    namespace springframework {
        namespace amqp {
            /**
             * Thrown when the connection factory has been destroyed during
             * context close; the factory can no longer open connections.
             * @author Gary Russell
             * @since 2.0
             */
            // @ts-ignore
            class AmqpApplicationContextClosedException extends org.springframework.amqp.AmqpException {
                // @ts-ignore
                constructor(message: string)
            }
        }
    }
}
