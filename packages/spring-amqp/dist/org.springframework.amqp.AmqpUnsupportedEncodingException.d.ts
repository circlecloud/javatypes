declare namespace org {
    namespace springframework {
        namespace amqp {
            /**
             * RuntimeException for unsupported encoding in an AMQP operation.
             * @author Mark Pollack
             */
            // @ts-ignore
            class AmqpUnsupportedEncodingException extends org.springframework.amqp.AmqpException {
                // @ts-ignore
                constructor(cause: Error)
            }
        }
    }
}
