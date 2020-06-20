declare namespace org {
    namespace springframework {
        namespace amqp {
            /**
             * Exception for listener implementations used to indicate the
             * basic.reject will be sent with requeue=false in order to enable
             * features such as DLQ.
             * @author Gary Russell
             * @since 1.0.1
             */
            // @ts-ignore
            class AmqpRejectAndDontRequeueException extends org.springframework.amqp.AmqpException {
                /**
                 * Construct an instance with the supplied argument.
                 * @param message A message describing the problem.
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Construct an instance with the supplied argument.
                 * @param cause the cause.
                 */
                // @ts-ignore
                constructor(cause: Error)
                /**
                 * Construct an instance with the supplied arguments.
                 * @param message A message describing the problem.
                 * @param cause the cause.
                 */
                // @ts-ignore
                constructor(message: string, cause: Error)
                /**
                 * Construct an instance with the supplied arguments.
                 * @param message A message describing the problem.
                 * @param rejectManual true to reject the message, even with Manual Acks if this is
                 *  the top-level exception (e.g. thrown by an error handler).
                 * @param cause the cause.
                 * @since 2.1.9
                 */
                // @ts-ignore
                constructor(message: string, rejectManual: boolean, cause: Error)
                /**
                 * True if the container should reject the message, even with manual acks.
                 * @return true to reject.
                 */
                // @ts-ignore
                isRejectManual(): boolean
            }
        }
    }
}
