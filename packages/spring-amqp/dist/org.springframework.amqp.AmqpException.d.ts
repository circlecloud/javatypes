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
                constructor(message: string)
                // @ts-ignore
                constructor(cause: Error)
                // @ts-ignore
                constructor(message: string, cause: Error)
            }
        }
    }
}
