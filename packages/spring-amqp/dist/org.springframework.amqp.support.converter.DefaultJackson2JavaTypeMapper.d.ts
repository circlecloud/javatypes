declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * Jackson 2 type mapper.
                     * @author Mark Pollack
                     * @author Sam Nelson
                     * @author Andreas Asplund
                     * @author Artem Bilan
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    class DefaultJackson2JavaTypeMapper extends org.springframework.amqp.support.converter.AbstractJavaTypeMapper implements org.springframework.amqp.support.converter.Jackson2JavaTypeMapper, org.springframework.amqp.support.converter.ClassMapper {
                        // @ts-ignore
                        constructor()
                        /**
                         * Return the precedence.
                         * @return the precedence.
                         * @see #setTypePrecedence(Jackson2JavaTypeMapper.TypePrecedence)
                         * @since 1.6.
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
                         * <p>
                         * By default, if the type is concrete (not abstract, not an interface), this will
                         * be used ahead of type information provided in the {@code __TypeId__} and
                         * associated headers provided by the sender.
                         * <p>
                         * If you wish to force the use of the  {@code __TypeId__} and associated headers
                         * (such as when the actual type is a subclass of the method argument type),
                         * set the precedence to {@link Jackson2JavaTypeMapper.TypePrecedence#TYPE_ID}.
                         * @param typePrecedence the precedence.
                         * @since 1.6
                         */
                        // @ts-ignore
                        public setTypePrecedence(typePrecedence: org.springframework.amqp.support.converter.Jackson2JavaTypeMapper.TypePrecedence): void
                        /**
                         * Specify a set of packages to trust during deserialization.
                         * The asterisk ({@code *}) means trust all.
                         * @param trustedPackages the trusted Java packages for deserialization
                         * @since 1.6.11
                         */
                        // @ts-ignore
                        public setTrustedPackages(...trustedPackages: java.lang.String[] | string[]): void
                        // @ts-ignore
                        public addTrustedPackages(...packages: java.lang.String[] | string[]): void
                        // @ts-ignore
                        public toJavaType(properties: org.springframework.amqp.core.MessageProperties): JavaType
                        // @ts-ignore
                        public fromJavaType(javaType: JavaType, properties: org.springframework.amqp.core.MessageProperties): void
                        // @ts-ignore
                        public fromClass(clazz: java.lang.Class<any>, properties: org.springframework.amqp.core.MessageProperties): void
                        // @ts-ignore
                        public toClass(properties: org.springframework.amqp.core.MessageProperties): java.lang.Class<any>
                    }
                }
            }
        }
    }
}
