declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * {@link ErrorHandler} that conditionally wraps the Exception in an
                     * {@link AmqpRejectAndDontRequeueException} if the configured rejection
                     * strategy determines that the message is fatal and should not be requeued.
                     * Such messages will be discarded or sent to a Dead Letter Exchange, depending
                     * on broker configuration.
                     * <p>
                     * The default strategy will do this if the exception is a
                     * {@link ListenerExecutionFailedException} with a cause of {@link MessageConversionException},
                     * {@link org.springframework.messaging.converter.MessageConversionException},
                     * {@link org.springframework.messaging.handler.annotation.support.MethodArgumentNotValidException},
                     * {@link org.springframework.messaging.handler.annotation.support.MethodArgumentTypeMismatchException},
                     * {@link NoSuchMethodException} or {@link ClassCastException}.
                     * <p>
                     * The exception will not be wrapped if the {@code cause} chain already contains an
                     * {@link AmqpRejectAndDontRequeueException}.
                     * @author Gary Russell
                     * @since 1.3.2
                     */
                    // @ts-ignore
                    class ConditionalRejectingErrorHandler extends java.lang.Object {
                        /**
                         * Create a handler with the {@link ConditionalRejectingErrorHandler.DefaultExceptionStrategy}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a handler with the supplied {@link FatalExceptionStrategy} implementation.
                         * @param exceptionStrategy The strategy implementation.
                         */
                        // @ts-ignore
                        constructor(exceptionStrategy: org.springframework.amqp.rabbit.listener.FatalExceptionStrategy)
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Set to false to disable the (now) default behavior of logging and discarding
                         * messages that cause fatal exceptions and have an `x-death` header; which
                         * usually means that the message has been republished after previously being
                         * sent to a DLQ.
                         * @param discardFatalsWithXDeath false to disable.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public setDiscardFatalsWithXDeath(discardFatalsWithXDeath: boolean): void
                        /**
                         * Set to false to NOT reject a fatal message when MANUAL ack mode is being used.
                         * @param rejectManual false to leave the message in an unack'd state.
                         * @since 2.1.9
                         */
                        // @ts-ignore
                        public setRejectManual(rejectManual: boolean): void
                        // @ts-ignore
                        public handleError(t: java.lang.Throwable | Error): void
                        /**
                         * Log the throwable at WARN level, including stack trace.
                         * Subclasses can override this behavior.
                         * @param t the {#link Throwable}.
                         * @since 1.7.8
                         */
                        // @ts-ignore
                        log(t: java.lang.Throwable | Error): void
                        /**
                         * Return true if there is already an {@link AmqpRejectAndDontRequeueException}
                         * present in the cause chain.
                         * @param t a {#link Throwable}.
                         * @return true if the cause chain already contains an
                         *  {#link AmqpRejectAndDontRequeueException}.
                         * @since 1.7.8
                         */
                        // @ts-ignore
                        causeChainContainsARADRE(t: java.lang.Throwable | Error): boolean
                    }
                }
            }
        }
    }
}
