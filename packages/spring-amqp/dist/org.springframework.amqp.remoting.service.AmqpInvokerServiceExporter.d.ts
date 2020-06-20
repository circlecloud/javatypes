declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace remoting {
                namespace service {
                    /**
                     * This message listener exposes a plain java service via AMQP. Such services can be accessed via plain AMQP or via
                     * {@link org.springframework.amqp.remoting.client.AmqpProxyFactoryBean}.
                     * To configure this message listener so that it actually receives method calls via AMQP, it needs to be put into a
                     * listener container. See {@link MessageListener}.
                     * <p>
                     * When receiving a message, a service method is called according to the contained {@link RemoteInvocation}. The result
                     * of that invocation is returned as a {@link RemoteInvocationResult} contained in a message that is sent according to
                     * the <code>ReplyToAddress</code> of the received message.
                     * <p>
                     * Please note that this exporter does not use the {@link MessageConverter} of the injected {@link AmqpTemplate} to
                     * convert incoming calls and their results. Instead you have to directly inject the <code>MessageConverter</code> into
                     * this class.
                     * <p>
                     * This listener responds to "Request/Reply"-style messages as described <a href=
                     * "https://docs.spring.io/spring-amqp/reference/html/#request-reply" >here</a>.
                     * @author David Bilge
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @since 1.2
                     */
                    // @ts-ignore
                    class AmqpInvokerServiceExporter extends RemoteInvocationBasedExporter implements org.springframework.amqp.core.MessageListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        onMessage(message: org.springframework.amqp.core.Message): void
                        // @ts-ignore
                        getAmqpTemplate(): org.springframework.amqp.core.AmqpTemplate
                        /**
                         * The AMQP template to use for sending the return value.
                         * <p>
                         * Note that the exchange and routing key parameters on this template are ignored for these return messages. Instead
                         * of those the respective parameters from the original message's <code>returnAddress</code> are being used.
                         * <p>
                         * Also, the template's {@link MessageConverter} is not used for the reply.
                         * @param amqpTemplate The amqp template.
                         * @see #setMessageConverter(MessageConverter)
                         */
                        // @ts-ignore
                        setAmqpTemplate(amqpTemplate: org.springframework.amqp.core.AmqpTemplate): void
                        // @ts-ignore
                        getMessageConverter(): org.springframework.amqp.support.converter.MessageConverter
                        /**
                         * Set the message converter for this remote service. Used to deserialize remote method calls and to serialize their
                         * return values.
                         * <p>
                         * The default converter is a SimpleMessageConverter, which is able to handle byte arrays, Strings, and Serializable
                         * Objects depending on the message content type header.
                         * <p>
                         * Note that this class never uses the message converter of the underlying {@link AmqpTemplate}!
                         * @param messageConverter The message converter.
                         * @see org.springframework.amqp.support.converter.SimpleMessageConverter
                         */
                        // @ts-ignore
                        setMessageConverter(messageConverter: org.springframework.amqp.support.converter.MessageConverter): void
                    }
                }
            }
        }
    }
}
