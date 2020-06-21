declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace AsyncRabbitTemplate {
                    /**
                     * Base class for {@link ListenableFuture}s returned by {@link AsyncRabbitTemplate}.
                     * @param <T> the type.
                     * @since 1.6
                     */
                    // @ts-ignore
                    abstract class RabbitFuture<T> extends java.lang.Object {
                        // @ts-ignore
                        constructor(correlationId: java.lang.String | string, requestMessage: Message)
                        // @ts-ignore
                        public cancel(mayInterruptIfRunning: boolean): boolean
                        /**
                         * When confirms are enabled contains a {@link ListenableFuture}
                         * for the confirmation.
                         * @return the future.
                         */
                        // @ts-ignore
                        public getConfirm(): object
                        /**
                         * When confirms are enabled and a nack is received, contains
                         * the cause for the nack, if any.
                         * @return the cause.
                         */
                        // @ts-ignore
                        public getNackCause(): string
                    }
                }
            }
        }
    }
}
