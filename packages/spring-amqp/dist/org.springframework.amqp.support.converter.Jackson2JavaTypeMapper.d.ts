declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * Strategy for setting metadata on messages such that one can create the class that needs
                     * to be instantiated when receiving a message.
                     * @author Mark Pollack
                     * @author James Carr
                     * @author Sam Nelson
                     * @author Andreas Asplund
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    interface Jackson2JavaTypeMapper extends org.springframework.amqp.support.converter.ClassMapper {
                        /**
                         * Set the message properties according to the type.
                         * @param javaType the type.
                         * @param properties the properties.
                         */
                        // @ts-ignore
                        fromJavaType(javaType: JavaType, properties: org.springframework.amqp.core.MessageProperties): void
                        /**
                         * Determine the type from the message properties.
                         * @param properties the properties.
                         * @return the type.
                         */
                        // @ts-ignore
                        toJavaType(properties: org.springframework.amqp.core.MessageProperties): JavaType
                        /**
                         * Get the type precedence.
                         * @return the precedence.
                         * @since 1.6
                         */
                        // @ts-ignore
                        getTypePrecedence(): org.springframework.amqp.support.converter.Jackson2JavaTypeMapper.TypePrecedence
                        /**
                         * Add trusted packages.
                         * @param packages the packages.
                         * @since 2.1
                         */
                        // @ts-ignore
                        addTrustedPackages(...packages: string[]): void
                    }
                }
            }
        }
    }
}
