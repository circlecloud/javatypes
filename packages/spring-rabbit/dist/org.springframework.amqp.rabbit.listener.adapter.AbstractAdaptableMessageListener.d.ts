declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace adapter {
                        /**
                         * An abstract {@link org.springframework.amqp.core.MessageListener} adapter providing the
                         * necessary infrastructure to extract the payload of a {@link Message}.
                         * @author Stephane Nicoll
                         * @author Gary Russell
                         * @author Artem Bilan
                         * @author Johan Haleby
                         * @since 1.4
                         * @see ChannelAwareMessageListener
                         */
                        // @ts-ignore
                        abstract class AbstractAdaptableMessageListener extends java.lang.Object implements org.springframework.amqp.rabbit.listener.api.ChannelAwareMessageListener {
                            // @ts-ignore
                            constructor()
                            /**
                             * Logger available to subclasses.
                             */
                            // @ts-ignore
                            readonly logger: Log
                            /**
                             * Set the routing key to use when sending response messages.
                             * This will be applied in case of a request message that
                             * does not carry a "ReplyTo" property
                             * <p>
                             * Response destinations are only relevant for listener methods
                             * that return result objects, which will be wrapped in
                             * a response message and sent to a response destination.
                             * @param responseRoutingKey The routing key.
                             */
                            // @ts-ignore
                            public setResponseRoutingKey(responseRoutingKey: java.lang.String | string): void
                            /**
                             * The encoding to use when inter-converting between byte arrays and Strings in
                             * message properties.
                             * @param encoding the encoding to set.
                             */
                            // @ts-ignore
                            public setEncoding(encoding: java.lang.String | string): void
                            /**
                             * The encoding to use when inter-converting between byte arrays and Strings in
                             * message properties.
                             * @return encoding the encoding.
                             */
                            // @ts-ignore
                            public getEncoding(): string
                            /**
                             * Set the exchange to use when sending response messages.
                             * This is only used if the exchange from the received message is null.
                             * <p>
                             * Response destinations are only relevant for listener methods
                             * that return result objects, which will be wrapped in
                             * a response message and sent to a response destination.
                             * @param responseExchange The exchange.
                             */
                            // @ts-ignore
                            public setResponseExchange(responseExchange: java.lang.String | string): void
                            /**
                             * Set the default replyTo address to use when sending response messages.
                             * This is only used if the replyTo from the received message is null.
                             * <p>
                             * Response destinations are only relevant for listener methods
                             * that return result objects, which will be wrapped in
                             * a response message and sent to a response destination.
                             * <p>
                             * It can be a string surrounded by "!{...}" in which case the expression is
                             * evaluated at runtime; see the reference manual for more information.
                             * @param defaultReplyTo The exchange.
                             * @since 1.6
                             */
                            // @ts-ignore
                            public setResponseAddress(defaultReplyTo: java.lang.String | string): void
                            // @ts-ignore
                            public setMandatoryPublish(mandatoryPublish: boolean): void
                            /**
                             * Set the converter that will convert incoming Rabbit messages to listener method arguments, and objects returned
                             * from listener methods back to Rabbit messages.
                             * <p>
                             * The default converter is a {@link SimpleMessageConverter}, which is able to handle "text" content-types.
                             * @param messageConverter The message converter.
                             */
                            // @ts-ignore
                            public setMessageConverter(messageConverter: MessageConverter): void
                            /**
                             * Set a post processor to process the reply immediately before
                             * {@code Channel#basicPublish()}. Often used to compress the data.
                             * @param replyPostProcessor the reply post processor.
                             * @deprecated in favor of {#link #setBeforeSendReplyPostProcessors(MessagePostProcessor...)}.
                             */
                            // @ts-ignore
                            public setReplyPostProcessor(replyPostProcessor: MessagePostProcessor): void
                            /**
                             * Set post processors that will be applied before sending replies.
                             * @param beforeSendReplyPostProcessors the post processors.
                             * @since 2.0.3
                             */
                            // @ts-ignore
                            public setBeforeSendReplyPostProcessors(...beforeSendReplyPostProcessors: MessagePostProcessor[]): void
                            /**
                             * Set a {@link RetryTemplate} to use when sending replies.
                             * @param retryTemplate the template.
                             * @since 2.0.6
                             * @see #setRecoveryCallback(RecoveryCallback)
                             */
                            // @ts-ignore
                            public setRetryTemplate(retryTemplate: RetryTemplate): void
                            /**
                             * Set a {@link RecoveryCallback} to invoke when retries are exhausted.
                             * @param recoveryCallback the recovery callback.
                             * @since 2.0.6
                             * @see #setRetryTemplate(RetryTemplate)
                             */
                            // @ts-ignore
                            public setRecoveryCallback(recoveryCallback: object): void
                            /**
                             * Set a bean resolver for runtime SpEL expressions. Also configures the evaluation
                             * context with a standard type converter and map accessor.
                             * @param beanResolver the resolver.
                             * @since 1.6
                             */
                            // @ts-ignore
                            public setBeanResolver(beanResolver: BeanResolver): void
                            /**
                             * Return the converter that will convert incoming Rabbit messages to listener method arguments, and objects
                             * returned from listener methods back to Rabbit messages.
                             * @return The message converter.
                             */
                            // @ts-ignore
                            getMessageConverter(): MessageConverter
                            /**
                             * Set to the value of this listener's container equivalent property. Used when
                             * rejecting from an async listener.
                             * @param defaultRequeueRejected false to not requeue.
                             * @since 2.1.8
                             */
                            // @ts-ignore
                            public setDefaultRequeueRejected(defaultRequeueRejected: boolean): void
                            // @ts-ignore
                            public containerAckMode(mode: AcknowledgeMode): void
                            /**
                             * Handle the given exception that arose during listener execution.
                             * The default implementation logs the exception at error level.
                             * <p>
                             * Can be used by inheritors from overridden {@link #onMessage(Message)}
                             * or {@link #onMessage(Message, com.rabbitmq.client.Channel)}
                             * @param ex the exception to handle
                             */
                            // @ts-ignore
                            handleListenerException(ex: java.lang.Throwable | Error): void
                            /**
                             * Extract the message body from the given Rabbit message.
                             * @param message the Rabbit <code>Message</code>
                             * @return the content of the message, to be passed into the listener method as argument
                             */
                            // @ts-ignore
                            extractMessage(message: Message): any
                            /**
                             * Handle the given result object returned from the listener method, sending a
                             * response message back.
                             * @param resultArg the result object to handle (never <code>null</code>)
                             * @param request the original request message
                             * @param channel the Rabbit channel to operate on (may be <code>null</code>)
                             * @see #buildMessage
                             * @see #postProcessResponse
                             * @see #getReplyToAddress(Message, Object, InvocationResult)
                             * @see #sendResponse
                             */
                            // @ts-ignore
                            handleResult(resultArg: org.springframework.amqp.rabbit.listener.adapter.InvocationResult, request: Message, channel: Channel): void
                            /**
                             * Handle the given result object returned from the listener method, sending a
                             * response message back.
                             * @param resultArg the result object to handle (never <code>null</code>)
                             * @param request the original request message
                             * @param channel the Rabbit channel to operate on (may be <code>null</code>)
                             * @param source the source data for the method invocation - e.g.
                             *  {#code o.s.messaging.Message<?>}; may be null
                             * @see #buildMessage
                             * @see #postProcessResponse
                             * @see #getReplyToAddress(Message, Object, InvocationResult)
                             * @see #sendResponse
                             */
                            // @ts-ignore
                            handleResult(resultArg: org.springframework.amqp.rabbit.listener.adapter.InvocationResult, request: Message, channel: Channel, source: java.lang.Object | any): void
                            // @ts-ignore
                            doHandleResult(resultArg: org.springframework.amqp.rabbit.listener.adapter.InvocationResult, request: Message, channel: Channel, source: java.lang.Object | any): void
                            // @ts-ignore
                            getReceivedExchange(request: Message): string
                            /**
                             * Build a Rabbit message to be sent as response based on the given result object.
                             * @param channel the Rabbit Channel to operate on.
                             * @param result the content of the message, as returned from the listener method.
                             * @param genericType the generic type to populate type headers.
                             * @return the Rabbit <code>Message</code> (never <code>null</code>).
                             * @see #setMessageConverter
                             */
                            // @ts-ignore
                            buildMessage(channel: Channel, result: java.lang.Object | any, genericType: java.lang.reflect.Type): Message
                            /**
                             * Post-process the given response message before it will be sent.
                             * <p>
                             * The default implementation sets the response's correlation id to the request message's correlation id, if any;
                             * otherwise to the request message id.
                             * @param request the original incoming Rabbit message
                             * @param response the outgoing Rabbit message about to be sent
                             */
                            // @ts-ignore
                            postProcessResponse(request: Message, response: Message): void
                            /**
                             * Determine a reply-to Address for the given message.
                             * <p>
                             * The default implementation first checks the Rabbit Reply-To Address of the supplied request; if that is not
                             * <code>null</code> it is returned; if it is <code>null</code>, then the configured default response Exchange and
                             * routing key are used to construct a reply-to Address. If the responseExchange property is also <code>null</code>,
                             * then an {@link org.springframework.amqp.AmqpException} is thrown.
                             * @param request the original incoming Rabbit message.
                             * @param source the source data (e.g. {#code o.s.messaging.Message<?>}).
                             * @param result the result.
                             * @return the reply-to Address (never <code>null</code>)
                             * @throws org.springframework.amqp.AmqpException if no {#link Address} can be determined
                             * @see #setResponseAddress(String)
                             * @see #setResponseRoutingKey(String)
                             * @see org.springframework.amqp.core.Message#getMessageProperties()
                             * @see org.springframework.amqp.core.MessageProperties#getReplyTo()
                             */
                            // @ts-ignore
                            getReplyToAddress(request: Message, source: java.lang.Object | any, result: org.springframework.amqp.rabbit.listener.adapter.InvocationResult): Address
                            /**
                             * Send the given response message to the given destination.
                             * @param channel the Rabbit channel to operate on
                             * @param replyTo the Rabbit ReplyTo string to use when sending. Currently interpreted to be the routing key.
                             * @param messageIn the Rabbit message to send
                             * @see #postProcessResponse(Message, Message)
                             */
                            // @ts-ignore
                            sendResponse(channel: Channel, replyTo: Address, messageIn: Message): void
                            // @ts-ignore
                            doPublish(channel: Channel, replyTo: Address, message: Message): void
                            /**
                             * Post-process the given message before sending the response.
                             * <p>
                             * The default implementation is empty.
                             * @param channel The channel.
                             * @param response the outgoing Rabbit message about to be sent
                             */
                            // @ts-ignore
                            postProcessChannel(channel: Channel, response: Message): void
                        }
                    }
                }
            }
        }
    }
}
