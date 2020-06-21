declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * Spring Rabbit {@link MessageConverter} that uses a {@link Marshaller} and {@link Unmarshaller}.
                     * Marshals an object to a {@link Message} and unmarshals a {@link Message} to an object.
                     * @author Mark Fisher
                     * @author Arjen Poutsma
                     * @author Juergen Hoeller
                     * @author James Carr
                     * @see org.springframework.amqp.core.AmqpTemplate#convertAndSend(Object)
                     * @see org.springframework.amqp.core.AmqpTemplate#receiveAndConvert()
                     */
                    // @ts-ignore
                    class MarshallingMessageConverter extends org.springframework.amqp.support.converter.AbstractMessageConverter {
                        /**
                         * Construct a new <code>MarshallingMessageConverter</code> with no {@link Marshaller} or {@link Unmarshaller} set.
                         * The marshaller must be set after construction by invoking {@link #setMarshaller(Marshaller)} and
                         * {@link #setUnmarshaller(Unmarshaller)} .
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a new <code>MarshallingMessageConverter</code> with the given {@link Marshaller} set.
                         * <p>If the given {@link Marshaller} also implements the {@link Unmarshaller} interface,
                         * it is used for both marshalling and unmarshalling. Otherwise, an exception is thrown.
                         * <p>Note that all {@link Marshaller} implementations in Spring also implement the
                         * {@link Unmarshaller} interface, so that you can safely use this constructor.
                         * @param marshaller object used as marshaller and unmarshaller
                         * @throws IllegalArgumentException when <code>marshaller</code> does not implement the
                         *  {#link Unmarshaller} interface as well
                         */
                        // @ts-ignore
                        constructor(marshaller: Marshaller)
                        /**
                         * Construct a new <code>MarshallingMessageConverter</code> with the
                         * given Marshaller and Unmarshaller.
                         * @param marshaller the Marshaller to use
                         * @param unmarshaller the Unmarshaller to use
                         */
                        // @ts-ignore
                        constructor(marshaller: Marshaller, unmarshaller: Unmarshaller)
                        /**
                         * Set the contentType to be used by this message converter.
                         * @param contentType The content type.
                         */
                        // @ts-ignore
                        public setContentType(contentType: java.lang.String | string): void
                        /**
                         * Set the {@link Marshaller} to be used by this message converter.
                         * @param marshaller The marshaller.
                         */
                        // @ts-ignore
                        public setMarshaller(marshaller: Marshaller): void
                        /**
                         * Set the {@link Unmarshaller} to be used by this message converter.
                         * @param unmarshaller The unmarshaller.
                         */
                        // @ts-ignore
                        public setUnmarshaller(unmarshaller: Unmarshaller): void
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        /**
                         * Marshals the given object to a {@link Message}.
                         */
                        // @ts-ignore
                        createMessage(object: java.lang.Object | any, messageProperties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.Message
                        /**
                         * Unmarshals the given {@link Message} into an object.
                         */
                        // @ts-ignore
                        public fromMessage(message: org.springframework.amqp.core.Message): any
                    }
                }
            }
        }
    }
}
