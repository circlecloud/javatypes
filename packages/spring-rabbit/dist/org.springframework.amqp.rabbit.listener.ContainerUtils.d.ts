declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * Utility methods for listener containers.
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @since 2.1
                     */
                    // @ts-ignore
                    class ContainerUtils extends java.lang.Object {
                        /**
                         * Determine whether a message should be requeued; returns true if the throwable is a
                         * {@link MessageRejectedWhileStoppingException} or defaultRequeueRejected is true and
                         * there is not an {@link AmqpRejectAndDontRequeueException} in the cause chain or if
                         * there is an {@link ImmediateRequeueAmqpException} in the cause chain.
                         * @param defaultRequeueRejected the default requeue rejected.
                         * @param throwable the throwable.
                         * @param logger the logger to use for debug.
                         * @return true to requeue.
                         */
                        // @ts-ignore
                        public static shouldRequeue(defaultRequeueRejected: boolean, throwable: java.lang.Throwable | Error, logger: Log): boolean
                        /**
                         * Return true for {@link AmqpRejectAndDontRequeueException#isRejectManual()}.
                         * @param ex the exception.
                         * @return the exception's rejectManual property, if it's an
                         *  {#link AmqpRejectAndDontRequeueException}.
                         * @since 2.2
                         */
                        // @ts-ignore
                        public static isRejectManual(ex: java.lang.Throwable | Error): boolean
                    }
                }
            }
        }
    }
}
