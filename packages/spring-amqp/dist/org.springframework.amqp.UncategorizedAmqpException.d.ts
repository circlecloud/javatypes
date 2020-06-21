declare namespace org {
    namespace springframework {
        namespace amqp {
            /**
             * A "catch-all" exception type within the AmqpException hierarchy
             * when no more specific cause is known.
             * @author Mark Pollack
             */
            // @ts-ignore
            class UncategorizedAmqpException extends org.springframework.amqp.AmqpException {
                // @ts-ignore
                constructor(cause: java.lang.Throwable | Error)
                // @ts-ignore
                constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
            }
        }
    }
}
