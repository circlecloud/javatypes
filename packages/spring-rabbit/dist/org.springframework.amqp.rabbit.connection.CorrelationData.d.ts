declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Base class for correlating publisher confirms to sent messages.
                     * Use the {@link org.springframework.amqp.rabbit.core.RabbitTemplate}
                     * methods that include one of
                     * these as a parameter; when the publisher confirm is received,
                     * the CorrelationData is returned with the ack/nack.
                     * @author Gary Russell
                     * @since 1.0.1
                     */
                    // @ts-ignore
                    class CorrelationData extends java.lang.Object {
                        /**
                         * Construct an instance with a null Id.
                         * @since 1.6.7
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct an instance with the supplied id. Must be unique if returns are enabled
                         * to allow population of the {@link #setReturnedMessage(Message) returnedMessage}.
                         * @param id the id.
                         */
                        // @ts-ignore
                        constructor(id: java.lang.String | string)
                        // @ts-ignore
                        public getId(): string
                        /**
                         * Set the correlation id. Generally, the correlation id shouldn't be changed.
                         * One use case, however, is when it needs to be set in a
                         * {@link org.springframework.amqp.core.MessagePostProcessor} after a
                         * {@link CorrelationData} with a 'null' correlation id has been passed into a
                         * {@link org.springframework.amqp.rabbit.core.RabbitTemplate}.
                         * @param id the id.
                         * @since 1.6
                         */
                        // @ts-ignore
                        public setId(id: java.lang.String | string): void
                        /**
                         * Return a future to check the success/failure of the publish operation.
                         * @return the future.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public getFuture(): object
                        /**
                         * Return a returned message, if any; requires a unique
                         * {@link #CorrelationData(String) id}. Guaranteed to be populated before the future
                         * is set.
                         * @return the message or null.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public getReturnedMessage(): Message
                        /**
                         * Set a returned message for this correlation data.
                         * @param returnedMessage the returned message.
                         * @since 1.7.13
                         */
                        // @ts-ignore
                        public setReturnedMessage(returnedMessage: Message): void
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
