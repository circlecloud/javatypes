declare namespace org {
    namespace springframework {
        namespace amqp {
            /**
             * The {@link AmqpException} thrown when some resource can't be accessed.
             * For example when {@code channelMax} limit is reached and connect can't
             * create a new channel at the moment.
             * @author Artem Bilan
             * @author Gary Russell
             * @since 1.7.7
             */
            // @ts-ignore
            class AmqpResourceNotAvailableException extends org.springframework.amqp.AmqpException {
                // @ts-ignore
                constructor(message: java.lang.String | string)
                // @ts-ignore
                constructor(cause: java.lang.Throwable | Error)
                // @ts-ignore
                constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
            }
        }
    }
}
