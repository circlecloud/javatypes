declare namespace org {
    namespace springframework {
        namespace amqp {
            /**
             * The special {@link AmqpException} to be thrown from the listener (e.g. retry recoverer callback)
             * to {@code requeue} failed message.
             * @author Artem Bilan
             * @since 2.1
             */
            // @ts-ignore
            class ImmediateRequeueAmqpException extends org.springframework.amqp.AmqpException {
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
