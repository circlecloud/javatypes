declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Builds a Spring AMQP Message either from a byte[] body or
                 * another Message using a fluent API.
                 * @author Gary Russell
                 * @since 1.3
                 */
                // @ts-ignore
                class MessageBuilder extends org.springframework.amqp.core.MessageBuilderSupport<org.springframework.amqp.core.Message> {
                    /**
                     * The final message body will be a direct reference to 'body'.
                     * @param body The body.
                     * @return The builder.
                     */
                    // @ts-ignore
                    withBody(body: number /*byte*/[]): org.springframework.amqp.core.MessageBuilder
                    /**
                     * The final message body will be a copy of 'body' in a new array.
                     * @param body The body.
                     * @return The builder.
                     */
                    // @ts-ignore
                    withClonedBody(body: number /*byte*/[]): org.springframework.amqp.core.MessageBuilder
                    /**
                     * The final message body will be a new array containing the byte range from
                     * 'body'.
                     * @param body The body.
                     * @param from The starting index.
                     * @param to The ending index.
                     * @return The builder.
                     * @see Arrays#copyOfRange(byte[], int, int)
                     */
                    // @ts-ignore
                    withBody(body: number /*byte*/[], from: number /*int*/, to: number /*int*/): org.springframework.amqp.core.MessageBuilder
                    /**
                     * The final message body will be a direct reference to the message
                     * body, the MessageProperties will be a shallow copy.
                     * @param message The message.
                     * @return The builder.
                     */
                    // @ts-ignore
                    fromMessage(message: org.springframework.amqp.core.Message): org.springframework.amqp.core.MessageBuilder
                    /**
                     * The final message will have a copy of the message
                     * body, the MessageProperties will be cloned (top level only).
                     * @param message The message.
                     * @return The builder.
                     */
                    // @ts-ignore
                    fromClonedMessage(message: org.springframework.amqp.core.Message): org.springframework.amqp.core.MessageBuilder
                    /**
                     * Makes this builder's properties builder use a reference to properties.
                     * @param properties The properties.
                     * @return this.
                     */
                    // @ts-ignore
                    andProperties(properties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.MessageBuilder
                    // @ts-ignore
                    build(): org.springframework.amqp.core.Message
                }
            }
        }
    }
}
