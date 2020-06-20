declare namespace org {
    namespace springframework {
        namespace amqp {
            /**
             * Special exception for listener implementations that want to signal that the current
             * batch of messages should be acknowledged immediately (i.e. as soon as possible) without
             * rollback, and without consuming any more messages within the current transaction.
             * @author Dave Syer
             * @author Gary Russell
             */
            // @ts-ignore
            class ImmediateAcknowledgeAmqpException extends org.springframework.amqp.AmqpException {
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
