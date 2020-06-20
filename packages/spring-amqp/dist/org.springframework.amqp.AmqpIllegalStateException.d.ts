declare namespace org {
    namespace springframework {
        namespace amqp {
            /**
             * Equivalent of an IllegalStateException but within the AmqpException hierarchy.
             * @author Mark Pollack
             */
            // @ts-ignore
            class AmqpIllegalStateException extends org.springframework.amqp.AmqpException {
                // @ts-ignore
                constructor(message: string)
                // @ts-ignore
                constructor(message: string, cause: Error)
            }
        }
    }
}
