declare namespace org {
    namespace springframework {
        namespace amqp {
            /**
             * RuntimeException wrapper for an {@link java.net.ConnectException} which can be commonly
             * thrown from AMQP operations if the remote process dies or there is a network issue.
             * @author Dave Syer
             * @author Gary Russell
             */
            // @ts-ignore
            class AmqpConnectException extends org.springframework.amqp.AmqpException {
                /**
                 * Construct an instance with the supplied message and cause.
                 * @param cause the cause.
                 */
                // @ts-ignore
                constructor(cause: java.lang.Exception)
                /**
                 * Construct an instance with the supplied message and cause.
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
