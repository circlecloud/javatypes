declare namespace org {
    namespace springframework {
        namespace amqp {
            /**
             * Exception thrown when some time-bound operation fails to execute in the
             * desired time.
             * @author Gary Russell
             * @since 1.4.2
             */
            // @ts-ignore
            class AmqpTimeoutException extends org.springframework.amqp.AmqpException {
                // @ts-ignore
                constructor(message: string, cause: Error)
                // @ts-ignore
                constructor(message: string)
                // @ts-ignore
                constructor(cause: Error)
            }
        }
    }
}
