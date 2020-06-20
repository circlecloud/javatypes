declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * Convert a {@link Message} from the messaging abstraction to and from a
                     * {@link org.springframework.amqp.core.Message} using an underlying
                     * {@link MessageConverter} for the payload and a
                     * {@link org.springframework.amqp.support.AmqpHeaderMapper} to map the
                     * AMQP headers to and from standard message headers.
                     * <p>The inbound flag determines how headers should be mapped. If {@code true}
                     * (default), the caller is an inbound listener (i.e. parsing an AMQP message
                     * is considered to be a request).
                     * @author Stephane Nicoll
                     * @since 1.4
                     */
                    // @ts-ignore
                    class MessagingMessageConverter extends java.lang.Object implements org.springframework.amqp.support.converter.MessageConverter {
                        /**
                         * Create an instance with a default payload converter for an inbound
                         * handler.
                         * @see org.springframework.amqp.support.converter.SimpleMessageConverter
                         * @see org.springframework.amqp.support.SimpleAmqpHeaderMapper
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create an instance with the specified payload converter and
                         * header mapper.
                         * @param payloadConverter the target {#link MessageConverter} for {@code payload}.
                         * @param headerMapper the {#link AmqpHeaderMapper} to map AMQP header to {@code MessageHeaders}.
                         */
                        // @ts-ignore
                        constructor(payloadConverter: org.springframework.amqp.support.converter.MessageConverter, headerMapper: org.springframework.amqp.support.AmqpHeaderMapper)
                        /**
                         * Set the {@link MessageConverter} to use to convert the payload.
                         * @param payloadConverter the target {#link MessageConverter} for {@code payload}.
                         */
                        // @ts-ignore
                        setPayloadConverter(payloadConverter: org.springframework.amqp.support.converter.MessageConverter): void
                        /**
                         * Set the {@link AmqpHeaderMapper} to use to map AMQP headers to and from
                         * standard message headers.
                         * @param headerMapper the {#link AmqpHeaderMapper} to map AMQP header to {@code MessageHeaders}.
                         */
                        // @ts-ignore
                        setHeaderMapper(headerMapper: org.springframework.amqp.support.AmqpHeaderMapper): void
                        // @ts-ignore
                        afterPropertiesSet(): void
                        // @ts-ignore
                        toMessage(object: any, messageProperties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.Message
                        // @ts-ignore
                        fromMessage(message: org.springframework.amqp.core.Message): java.lang.Object
                        /**
                         * Extract the payload of the specified {@link org.springframework.amqp.core.Message}.
                         * @param message the AMQP Message to extract {#code payload}.
                         * @return the extracted {#code payload}.
                         */
                        // @ts-ignore
                        extractPayload(message: org.springframework.amqp.core.Message): java.lang.Object
                    }
                }
            }
        }
    }
}
