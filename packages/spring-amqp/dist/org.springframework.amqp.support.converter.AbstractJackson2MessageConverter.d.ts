declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * Abstract Jackson2 message converter.
                     * @author Mark Pollack
                     * @author James Carr
                     * @author Dave Syer
                     * @author Sam Nelson
                     * @author Andreas Asplund
                     * @author Artem Bilan
                     * @author Mohammad Hewedy
                     * @author Gary Russell
                     * @since 2.1
                     */
                    // @ts-ignore
                    abstract class AbstractJackson2MessageConverter extends org.springframework.amqp.support.converter.AbstractMessageConverter implements org.springframework.amqp.support.converter.SmartMessageConverter {
                        /**
                         * Construct with the provided {@link ObjectMapper} instance.
                         * @param objectMapper the {#link ObjectMapper} to use.
                         * @param contentType supported content type when decoding messages, only the subtype
                         *  is checked, e.g. *&#47;json, *&#47;xml.
                         * @param trustedPackages the trusted Java packages for deserialization
                         * @see DefaultJackson2JavaTypeMapper#setTrustedPackages(String...)
                         */
                        // @ts-ignore
                        constructor(objectMapper: ObjectMapper, contentType: MimeType, ...trustedPackages: java.lang.String[] | string[])
                        // @ts-ignore
                        readonly log: Log
                        // @ts-ignore
                        public static readonly DEFAULT_CHARSET: java.lang.String | string
                        // @ts-ignore
                        readonly objectMapper: ObjectMapper
                        // @ts-ignore
                        typeMapperSet: boolean
                        // @ts-ignore
                        public getClassMapper(): org.springframework.amqp.support.converter.ClassMapper
                        // @ts-ignore
                        public setClassMapper(classMapper: org.springframework.amqp.support.converter.ClassMapper): void
                        /**
                         * Specify the default charset to use when converting to or from text-based
                         * Message body content. If not specified, the charset will be "UTF-8".
                         * @param defaultCharset The default charset.
                         */
                        // @ts-ignore
                        public setDefaultCharset(defaultCharset: java.lang.String | string): void
                        // @ts-ignore
                        public getDefaultCharset(): string
                        // @ts-ignore
                        public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                        // @ts-ignore
                        getClassLoader(): java.lang.ClassLoader
                        // @ts-ignore
                        public getJavaTypeMapper(): org.springframework.amqp.support.converter.Jackson2JavaTypeMapper
                        // @ts-ignore
                        public setJavaTypeMapper(javaTypeMapper: org.springframework.amqp.support.converter.Jackson2JavaTypeMapper): void
                        /**
                         * Return the type precedence.
                         * @return the precedence.
                         * @see #setTypePrecedence(Jackson2JavaTypeMapper.TypePrecedence)
                         */
                        // @ts-ignore
                        public getTypePrecedence(): org.springframework.amqp.support.converter.Jackson2JavaTypeMapper.TypePrecedence
                        /**
                         * Set the precedence for evaluating type information in message properties.
                         * When using {@code @RabbitListener} at the method level, the framework attempts
                         * to determine the target type for payload conversion from the method signature.
                         * If so, this type is provided in the
                         * {@link MessageProperties#getInferredArgumentType() inferredArgumentType}
                         * message property.
                         * <p> By default, if the type is concrete (not abstract, not an interface), this will
                         * be used ahead of type information provided in the {@code __TypeId__} and
                         * associated headers provided by the sender.
                         * <p> If you wish to force the use of the  {@code __TypeId__} and associated headers
                         * (such as when the actual type is a subclass of the method argument type),
                         * set the precedence to {@link Jackson2JavaTypeMapper.TypePrecedence#TYPE_ID}.
                         * @param typePrecedence the precedence.
                         * @see DefaultJackson2JavaTypeMapper#setTypePrecedence(Jackson2JavaTypeMapper.TypePrecedence)
                         */
                        // @ts-ignore
                        public setTypePrecedence(typePrecedence: org.springframework.amqp.support.converter.Jackson2JavaTypeMapper.TypePrecedence): void
                        // @ts-ignore
                        public fromMessage(message: org.springframework.amqp.core.Message): any
                        /**
                         * {@inheritDoc}
                         * @param conversionHint The conversionHint must be a {#link ParameterizedTypeReference}.
                         */
                        // @ts-ignore
                        public fromMessage(message: org.springframework.amqp.core.Message, conversionHint: java.lang.Object | any): any
                        // @ts-ignore
                        createMessage(objectToConvert: java.lang.Object | any, messageProperties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.Message
                        // @ts-ignore
                        createMessage(objectToConvert: java.lang.Object | any, messageProperties: org.springframework.amqp.core.MessageProperties, genericType: java.lang.reflect.Type): org.springframework.amqp.core.Message
                    }
                }
            }
        }
    }
}
