declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace adapter {
                        /**
                         * A {@link org.springframework.amqp.core.MessageListener MessageListener}
                         * adapter that invokes a configurable {@link HandlerAdapter}.
                         * <p>Wraps the incoming {@link org.springframework.amqp.core.Message
                         * AMQP Message} to Spring's {@link Message} abstraction, copying the
                         * standard headers using a configurable
                         * {@link org.springframework.amqp.support.AmqpHeaderMapper AmqpHeaderMapper}.
                         * <p>The original {@link org.springframework.amqp.core.Message Message} and
                         * the {@link Channel} are provided as additional arguments so that these can
                         * be injected as method arguments if necessary.
                         * @author Stephane Nicoll
                         * @author Gary Russell
                         * @author Artem Bilan
                         * @since 1.4
                         */
                        // @ts-ignore
                        class MessagingMessageListenerAdapter extends org.springframework.amqp.rabbit.listener.adapter.AbstractAdaptableMessageListener {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            constructor(bean: java.lang.Object | any, method: java.lang.reflect.Method)
                            // @ts-ignore
                            constructor(bean: java.lang.Object | any, method: java.lang.reflect.Method, returnExceptions: boolean, errorHandler: org.springframework.amqp.rabbit.listener.api.RabbitListenerErrorHandler)
                            /**
                             * Set the {@link HandlerAdapter} to use to invoke the method
                             * processing an incoming {@link org.springframework.amqp.core.Message}.
                             * @param handlerAdapter {#link HandlerAdapter} instance.
                             */
                            // @ts-ignore
                            public setHandlerAdapter(handlerAdapter: org.springframework.amqp.rabbit.listener.adapter.HandlerAdapter): void
                            /**
                             * Set the {@link AmqpHeaderMapper} implementation to use to map the standard
                             * AMQP headers. By default, a {@link org.springframework.amqp.support.SimpleAmqpHeaderMapper
                             * SimpleAmqpHeaderMapper} is used.
                             * @param headerMapper the {#link AmqpHeaderMapper} instance.
                             * @see org.springframework.amqp.support.SimpleAmqpHeaderMapper
                             */
                            // @ts-ignore
                            public setHeaderMapper(headerMapper: AmqpHeaderMapper): void
                            /**
                             * @return the {#link MessagingMessageConverter} for this listener,
                             *  being able to convert {@link org.springframework.messaging.Message}.
                             */
                            // @ts-ignore
                            getMessagingMessageConverter(): MessagingMessageConverter
                            // @ts-ignore
                            public setMessageConverter(messageConverter: MessageConverter): void
                            // @ts-ignore
                            public onMessage(amqpMessage: org.springframework.amqp.core.Message, channel: Channel): void
                            // @ts-ignore
                            toMessagingMessage(amqpMessage: org.springframework.amqp.core.Message): object
                            /**
                             * Build a Rabbit message to be sent as response based on the given result object.
                             * @param channel the Rabbit Channel to operate on
                             * @param result the content of the message, as returned from the listener method
                             * @param genericType the generic type of the result.
                             * @return the Rabbit <code>Message</code> (never <code>null</code>)
                             * @see #setMessageConverter
                             */
                            // @ts-ignore
                            buildMessage(channel: Channel, result: java.lang.Object | any, genericType: java.lang.reflect.Type): org.springframework.amqp.core.Message
                        }
                    }
                }
            }
        }
    }
}
