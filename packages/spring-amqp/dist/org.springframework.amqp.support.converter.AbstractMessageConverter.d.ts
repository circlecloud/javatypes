declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * Convenient base class for {@link MessageConverter} implementations.
                     * @author Dave Syer
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    abstract class AbstractMessageConverter extends java.lang.Object implements org.springframework.amqp.support.converter.MessageConverter {
                        // @ts-ignore
                        constructor()
                        /**
                         * Flag to indicate that new messages should have unique identifiers added to their properties before sending.
                         * Default false.
                         * @param createMessageIds the flag value to set
                         */
                        // @ts-ignore
                        public setCreateMessageIds(createMessageIds: boolean): void
                        /**
                         * Flag to indicate that new messages should have unique identifiers added to their properties before sending.
                         * @return the flag value
                         */
                        // @ts-ignore
                        isCreateMessageIds(): boolean
                        // @ts-ignore
                        public toMessage(object: java.lang.Object | any, messageProperties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.Message
                        // @ts-ignore
                        public toMessage(object: java.lang.Object | any, messagePropertiesArg: org.springframework.amqp.core.MessageProperties, genericType: java.lang.reflect.Type): org.springframework.amqp.core.Message
                        /**
                         * Crate a message from the payload object and message properties provided. The message id will be added to the
                         * properties if necessary later.
                         * @param object the payload
                         * @param messageProperties the message properties (headers)
                         * @param genericType the type to convert from - used to populate type headers.
                         * @return a message
                         * @since 2.1
                         */
                        // @ts-ignore
                        createMessage(object: java.lang.Object | any, messageProperties: org.springframework.amqp.core.MessageProperties, genericType: java.lang.reflect.Type): org.springframework.amqp.core.Message
                        /**
                         * Crate a message from the payload object and message properties provided. The message id will be added to the
                         * properties if necessary later.
                         * @param object the payload.
                         * @param messageProperties the message properties (headers).
                         * @return a message.
                         */
                        // @ts-ignore
                        abstract createMessage(object: java.lang.Object | any, messageProperties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.Message
                    }
                }
            }
        }
    }
}
