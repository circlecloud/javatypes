declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    /**
                     * A {@link org.springframework.amqp.rabbit.listener.RabbitListenerEndpoint} simply
                     * providing the {@link MessageListener} to invoke to process an incoming message for this
                     * endpoint.
                     * @author Stephane Nicoll
                     * @since 1.4
                     */
                    // @ts-ignore
                    class SimpleRabbitListenerEndpoint extends org.springframework.amqp.rabbit.listener.AbstractRabbitListenerEndpoint {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the {@link MessageListener} to invoke when a message matching
                         * the endpoint is received.
                         * @param messageListener the {#link MessageListener} instance.
                         */
                        // @ts-ignore
                        public setMessageListener(messageListener: MessageListener): void
                        /**
                         * @return the {#link MessageListener} to invoke when a message matching
                         *  the endpoint is received.
                         */
                        // @ts-ignore
                        public getMessageListener(): MessageListener
                        // @ts-ignore
                        createMessageListener(container: org.springframework.amqp.rabbit.listener.MessageListenerContainer): MessageListener
                        // @ts-ignore
                        getEndpointDescription(): java.lang.StringBuilder
                    }
                }
            }
        }
    }
}
