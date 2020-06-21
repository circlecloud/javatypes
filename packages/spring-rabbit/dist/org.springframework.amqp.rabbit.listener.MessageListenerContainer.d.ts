declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * Internal abstraction used by the framework representing a message
                     * listener container. Not meant to be implemented externally.
                     * @author Stephane Nicoll
                     * @author Gary Russell
                     * @since 1.4
                     */
                    // @ts-ignore
                    interface MessageListenerContainer {
                        /**
                         * Setup the message listener to use. Throws an {@link IllegalArgumentException}
                         * if that message listener type is not supported.
                         * @param messageListener the {#code object} to wrapped to the {@code MessageListener}.
                         */
                        // @ts-ignore
                        setupMessageListener(messageListener: MessageListener): void
                        /**
                         * @return the {#link MessageConverter} that can be used to
                         *  convert {@link org.springframework.amqp.core.Message}, if any.
                         * @deprecated - this converter is not used by the container; it was only
                         *  used to configure the converter for a {#code @RabbitListener} adapter.
                         *  That is now handled differently. If you are manually creating a listener
                         *  container, the converter must be configured in a listener adapter (if
                         *  present).
                         */
                        // @ts-ignore
                        getMessageConverter(): MessageConverter
                        /**
                         * Do not check for missing or mismatched queues during startup. Used for lazily
                         * loaded message listener containers to avoid a deadlock when starting such
                         * containers. Applications lazily loading containers should verify the queue
                         * configuration before loading the container bean.
                         * @since 2.1.5
                         */
                        // @ts-ignore
                        lazyLoad(): void
                    }
                }
            }
        }
    }
}
