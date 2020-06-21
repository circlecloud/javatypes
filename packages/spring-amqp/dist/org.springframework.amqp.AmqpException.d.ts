declare namespace org {
    namespace springframework {
        namespace amqp {
            /**
             * Base RuntimeException for errors that occur when executing AMQP operations.
             * @author Mark Fisher
             */
            // @ts-ignore
            class AmqpException extends java.lang.RuntimeException {
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
