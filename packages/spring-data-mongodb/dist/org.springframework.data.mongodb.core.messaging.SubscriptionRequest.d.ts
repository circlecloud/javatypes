declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        /**
                         * The actual {@link SubscriptionRequest} sent to the {@link MessageListenerContainer}. This wrapper type allows passing
                         * in {@link RequestOptions additional information} to the Container which can be used for creating the actual
                         * {@link Task} running. <br />
                         * The {@link MessageListener} provides the callback interface when pushing {@link Message messages}.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface SubscriptionRequest<S, T, O extends org.springframework.data.mongodb.core.messaging.SubscriptionRequest.RequestOptions> {
                            /**
                             * Obtain the {@link MessageListener} to publish {@link Message messages} to.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getMessageListener(): org.springframework.data.mongodb.core.messaging.MessageListener<S, any>
                            /**
                             * Get the {@link RequestOptions} specifying the requests behaviour.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getRequestOptions(): O
                        }
                    }
                }
            }
        }
    }
}
