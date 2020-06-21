declare namespace org {
    namespace springframework {
        namespace amqp {
            /**
             * RuntimeException wrapper for an {@link IOException} which
             * can be commonly thrown from AMQP operations.
             * @author Mark Pollack
             * @author Gary Russell
             */
            // @ts-ignore
            class AmqpIOException extends org.springframework.amqp.AmqpException {
                /**
                 * Construct an instance with the provided cause.
                 * @param cause the cause.
                 */
                // @ts-ignore
                constructor(cause: java.io.IOException)
                /**
                 * Construct an instance with the provided message and cause.
                 * @param message the message.
                 * @param cause the cause.
                 * @since 2.0
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
            }
        }
    }
}
