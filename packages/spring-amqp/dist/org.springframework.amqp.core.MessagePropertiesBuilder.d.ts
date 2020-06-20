declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Builds a Spring AMQP MessageProperties object using a fluent API.
                 * @author Gary Russell
                 * @since 1.3
                 */
                // @ts-ignore
                class MessagePropertiesBuilder extends org.springframework.amqp.core.MessageBuilderSupport<org.springframework.amqp.core.MessageProperties> {
                    /**
                     * Returns a builder with an initial set of properties.
                     * @return The builder.
                     */
                    // @ts-ignore
                    newInstance(): org.springframework.amqp.core.MessagePropertiesBuilder
                    /**
                     * Initializes the builder with the supplied properties; the same
                     * object will be returned by {@link #build()}.
                     * @param properties The properties.
                     * @return The builder.
                     */
                    // @ts-ignore
                    fromProperties(properties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.MessagePropertiesBuilder
                    /**
                     * Performs a shallow copy of the properties for the initial value.
                     * @param properties The properties.
                     * @return The builder.
                     */
                    // @ts-ignore
                    fromClonedProperties(properties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.MessagePropertiesBuilder
                    // @ts-ignore
                    copyProperties(properties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.MessagePropertiesBuilder
                    // @ts-ignore
                    build(): org.springframework.amqp.core.MessageProperties
                }
            }
        }
    }
}
