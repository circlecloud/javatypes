declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace retry {
                    /**
                     * {@link MessageRecoverer} implementation that republishes recovered messages
                     * to a specified exchange with the exception stack trace stored in the
                     * message header x-exception.
                     * <p>
                     * If no routing key is provided, the original routing key for the message,
                     * prefixed with {@link #setErrorRoutingKeyPrefix(String)} (default "error.")
                     * will be used to publish the message to the exchange provided in
                     * name, or the template's default exchange if none is set.
                     * @author James Carr
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @since 1.3
                     */
                    // @ts-ignore
                    class RepublishMessageRecoverer extends java.lang.Object implements org.springframework.amqp.rabbit.retry.MessageRecoverer {
                        // @ts-ignore
                        constructor(errorTemplate: AmqpTemplate)
                        // @ts-ignore
                        constructor(errorTemplate: AmqpTemplate, errorExchange: java.lang.String | string)
                        // @ts-ignore
                        constructor(errorTemplate: AmqpTemplate, errorExchange: java.lang.String | string, errorRoutingKey: java.lang.String | string)
                        // @ts-ignore
                        public static readonly X_EXCEPTION_STACKTRACE: java.lang.String | string
                        // @ts-ignore
                        public static readonly X_EXCEPTION_MESSAGE: java.lang.String | string
                        // @ts-ignore
                        public static readonly X_ORIGINAL_EXCHANGE: java.lang.String | string
                        // @ts-ignore
                        public static readonly X_ORIGINAL_ROUTING_KEY: java.lang.String | string
                        // @ts-ignore
                        public static readonly DEFAULT_FRAME_MAX_HEADROOM: number /*int*/
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        readonly errorTemplate: AmqpTemplate
                        // @ts-ignore
                        readonly errorRoutingKey: java.lang.String | string
                        // @ts-ignore
                        readonly errorExchangeName: java.lang.String | string
                        /**
                         * Apply a prefix to the outbound routing key, which will be prefixed to the original message
                         * routing key (if no explicit routing key was provided in the constructor; ignored otherwise.
                         * Use an empty string ("") for no prefixing.
                         * @param errorRoutingKeyPrefix The prefix (default "error.").
                         * @return this.
                         */
                        // @ts-ignore
                        public errorRoutingKeyPrefix(errorRoutingKeyPrefix: java.lang.String | string): org.springframework.amqp.rabbit.retry.RepublishMessageRecoverer
                        /**
                         * Set the amount by which the negotiated frame_max is to be reduced when considering
                         * truncating the stack trace header. Defaults to
                         * {@value #DEFAULT_FRAME_MAX_HEADROOM}.
                         * @param headroom the headroom
                         * @return this.
                         * @since 2.0.5
                         */
                        // @ts-ignore
                        public frameMaxHeadroom(headroom: number /*int*/): org.springframework.amqp.rabbit.retry.RepublishMessageRecoverer
                        /**
                         * @param errorRoutingKeyPrefix The prefix (default "error.").
                         * @see #errorRoutingKeyPrefix(String)
                         */
                        // @ts-ignore
                        public setErrorRoutingKeyPrefix(errorRoutingKeyPrefix: java.lang.String | string): void
                        // @ts-ignore
                        getErrorRoutingKeyPrefix(): string
                        /**
                         * Specify a {@link MessageDeliveryMode} to set into the message to republish
                         * if the message doesn't have it already.
                         * @param deliveryMode the delivery mode to set to message.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public setDeliveryMode(deliveryMode: MessageDeliveryMode): void
                        // @ts-ignore
                        getDeliveryMode(): MessageDeliveryMode
                        // @ts-ignore
                        public recover(message: Message, cause: java.lang.Throwable | Error): void
                        /**
                         * Subclasses can override this method to add more headers to the republished message.
                         * @param message The failed message.
                         * @param cause The cause.
                         * @return A {#link Map} of additional headers to add.
                         */
                        // @ts-ignore
                        additionalHeaders(message: Message, cause: java.lang.Throwable | Error): java.util.Map<any, any>
                    }
                }
            }
        }
    }
}
