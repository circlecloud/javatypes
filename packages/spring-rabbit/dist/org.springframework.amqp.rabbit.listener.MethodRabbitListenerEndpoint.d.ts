declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * A {@link RabbitListenerEndpoint} providing the method to invoke to process
                     * an incoming message for this endpoint.
                     * @author Stephane Nicoll
                     * @author Artem Bilan
                     * @author Gary Russell
                     * @since 1.4
                     */
                    // @ts-ignore
                    class MethodRabbitListenerEndpoint extends org.springframework.amqp.rabbit.listener.AbstractRabbitListenerEndpoint {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the object instance that should manage this endpoint.
                         * @param bean the target bean instance.
                         */
                        // @ts-ignore
                        public setBean(bean: java.lang.Object | any): void
                        // @ts-ignore
                        public getBean(): any
                        /**
                         * Set the method to invoke to process a message managed by this endpoint.
                         * @param method the target method for the {#link #bean}.
                         */
                        // @ts-ignore
                        public setMethod(method: java.lang.reflect.Method): void
                        // @ts-ignore
                        public getMethod(): java.lang.reflect.Method
                        /**
                         * Set the {@link MessageHandlerMethodFactory} to use to build the
                         * {@link InvocableHandlerMethod} responsible to manage the invocation
                         * of this endpoint.
                         * @param messageHandlerMethodFactory the {#link MessageHandlerMethodFactory} instance.
                         */
                        // @ts-ignore
                        public setMessageHandlerMethodFactory(messageHandlerMethodFactory: MessageHandlerMethodFactory): void
                        /**
                         * Set whether exceptions thrown by the listener should be returned to the sender
                         * using the normal {@code replyTo/@SendTo} semantics.
                         * @param returnExceptions true to return exceptions.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public setReturnExceptions(returnExceptions: boolean): void
                        /**
                         * Set the {@link RabbitListenerErrorHandler} to invoke if the listener method
                         * throws an exception.
                         * @param errorHandler the error handler.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public setErrorHandler(errorHandler: org.springframework.amqp.rabbit.listener.api.RabbitListenerErrorHandler): void
                        /**
                         * @return the messageHandlerMethodFactory
                         */
                        // @ts-ignore
                        getMessageHandlerMethodFactory(): MessageHandlerMethodFactory
                        // @ts-ignore
                        createMessageListener(container: org.springframework.amqp.rabbit.listener.MessageListenerContainer): org.springframework.amqp.rabbit.listener.adapter.MessagingMessageListenerAdapter
                        /**
                         * Create a {@link HandlerAdapter} for this listener adapter.
                         * @param messageListener the listener adapter.
                         * @return the handler adapter.
                         */
                        // @ts-ignore
                        configureListenerAdapter(messageListener: org.springframework.amqp.rabbit.listener.adapter.MessagingMessageListenerAdapter): org.springframework.amqp.rabbit.listener.adapter.HandlerAdapter
                        /**
                         * Create an empty {@link MessagingMessageListenerAdapter} instance.
                         * @return the {#link MessagingMessageListenerAdapter} instance.
                         */
                        // @ts-ignore
                        createMessageListenerInstance(): org.springframework.amqp.rabbit.listener.adapter.MessagingMessageListenerAdapter
                        // @ts-ignore
                        getEndpointDescription(): java.lang.StringBuilder
                    }
                }
            }
        }
    }
}
