declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * Implementation of {@link MessageConverter} that can work with Strings or native objects
                     * of any kind via the {@link Serializer} and {@link Deserializer} abstractions in Spring.
                     * The {@link #toMessage(Object, MessageProperties)} method simply checks the type of the
                     * provided instance while the {@link #fromMessage(Message)} method relies upon the
                     * {@link MessageProperties#getContentType() content-type} of the provided Message.
                     * <p>
                     * If a {@link DefaultDeserializer} is configured (default),
                     * the {@link #setWhiteListPatterns(java.util.List) white list patterns} will be applied
                     * (if configured); for all other deserializers, the deserializer is responsible for
                     * checking classes, if necessary.
                     * @author Dave Syer
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    class SerializerMessageConverter extends org.springframework.amqp.support.converter.WhiteListDeserializingMessageConverter {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly DEFAULT_CHARSET: java.lang.String | string
                        /**
                         * Flag to signal that the content type should be ignored and the deserializer used irrespective if it is a text
                         * message. Defaults to false, in which case the default encoding is used to convert a text message to a String.
                         * @param ignoreContentType the flag value to set
                         */
                        // @ts-ignore
                        public setIgnoreContentType(ignoreContentType: boolean): void
                        /**
                         * Specify the default charset to use when converting to or from text-based Message body content. If not specified,
                         * the charset will be "UTF-8".
                         * @param defaultCharset The default charset.
                         */
                        // @ts-ignore
                        public setDefaultCharset(defaultCharset: java.lang.String | string): void
                        /**
                         * The serializer to use for converting Java objects to message bodies.
                         * @param serializer the serializer to set
                         */
                        // @ts-ignore
                        public setSerializer(serializer: object): void
                        /**
                         * The deserializer to use for converting from message body to Java object.
                         * @param deserializer the deserializer to set
                         */
                        // @ts-ignore
                        public setDeserializer(deserializer: object): void
                        /**
                         * Converts from a AMQP Message to an Object.
                         */
                        // @ts-ignore
                        public fromMessage(message: org.springframework.amqp.core.Message): any
                        /**
                         * Creates an AMQP Message from the provided Object.
                         */
                        // @ts-ignore
                        createMessage(object: java.lang.Object | any, messageProperties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.Message
                    }
                }
            }
        }
    }
}
