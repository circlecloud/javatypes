declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * A callback invoked immediately before publishing a message to update, replace, or
                     * create correlation data for publisher confirms. Invoked after conversion and all
                     * {@link org.springframework.amqp.core.MessagePostProcessor}s.
                     * @author Gary Russell
                     * @since 1.6.7
                     */
                    // @ts-ignore
                    interface CorrelationDataPostProcessor {
                        /**
                         * Update or replace the correlation data provided in the send method.
                         * @param message the message.
                         * @param correlationData the existing data (if present).
                         * @return the correlation data.
                         */
                        // @ts-ignore
                        postProcess(message: Message, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): org.springframework.amqp.rabbit.connection.CorrelationData
                    }
                }
            }
        }
    }
}
