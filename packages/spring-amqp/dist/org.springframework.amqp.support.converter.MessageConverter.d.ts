declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * Message converter interface.
                     * @author Mark Fisher
                     * @author Mark Pollack
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    interface MessageConverter {
                        /**
                         * Convert a Java object to a Message.
                         * @param object the object to convert
                         * @param messageProperties The message properties.
                         * @return the Message
                         * @throws MessageConversionException in case of conversion failure
                         */
                        // @ts-ignore
                        toMessage(object: any, messageProperties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.Message
                        /**
                         * Convert a Java object to a Message.
                         * The default implementation calls {@link #toMessage(Object, MessageProperties)}.
                         * @param object the object to convert
                         * @param messageProperties The message properties.
                         * @param genericType the type to use to populate type headers.
                         * @return the Message
                         * @throws MessageConversionException in case of conversion failure
                         * @since 2.1
                         */
                        // @ts-ignore
                        toMessage(object: any, messageProperties: org.springframework.amqp.core.MessageProperties, genericType: java.lang.reflect.Type): org.springframework.amqp.core.Message
                        /**
                         * Convert from a Message to a Java object.
                         * @param message the message to convert
                         * @return the converted Java object
                         * @throws MessageConversionException in case of conversion failure
                         */
                        // @ts-ignore
                        fromMessage(message: org.springframework.amqp.core.Message): java.lang.Object
                    }
                }
            }
        }
    }
}
