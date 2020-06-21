declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * A composite {@link MessageConverter} that delegates to an actual {@link MessageConverter}
                     * based on the contentType header. Supports a default converter when no content type matches.
                     * Note: the {@link MessageProperties} requires a content type header to select a converter
                     * when used for outbound conversion, but the converter will (generally) override it to match
                     * the actual conversion.
                     * @author Eric Rizzo
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @since 1.4.2
                     */
                    // @ts-ignore
                    class ContentTypeDelegatingMessageConverter extends java.lang.Object implements org.springframework.amqp.support.converter.MessageConverter {
                        /**
                         * Constructs an instance using a default {@link SimpleMessageConverter}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Constructs an instance using a the supplied default converter.
                         * May be null meaning a strict content-type match is required.
                         * @param defaultConverter the converter.
                         */
                        // @ts-ignore
                        constructor(defaultConverter: org.springframework.amqp.support.converter.MessageConverter)
                        // @ts-ignore
                        public setDelegates(delegatesByContentType: java.util.Map<java.lang.String | string, org.springframework.amqp.support.converter.MessageConverter>): void
                        // @ts-ignore
                        public getDelegates(): java.util.Map<java.lang.String | string, org.springframework.amqp.support.converter.MessageConverter>
                        /**
                         * Add a delegate converter for the content type.
                         * @param contentType the content type to check.
                         * @param messageConverter the {#link MessageConverter} for the content type.
                         * @since 1.6
                         */
                        // @ts-ignore
                        public addDelegate(contentType: java.lang.String | string, messageConverter: org.springframework.amqp.support.converter.MessageConverter): void
                        /**
                         * Remove the delegate for the content type.
                         * @param contentType the content type key to remove {#link MessageConverter} from delegates.
                         * @return the remove {#link MessageConverter}.
                         */
                        // @ts-ignore
                        public removeDelegate(contentType: java.lang.String | string): org.springframework.amqp.support.converter.MessageConverter
                        // @ts-ignore
                        public fromMessage(message: org.springframework.amqp.core.Message): any
                        // @ts-ignore
                        public toMessage(object: java.lang.Object | any, messageProperties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.Message
                        // @ts-ignore
                        getConverterForContentType(contentType: java.lang.String | string): org.springframework.amqp.support.converter.MessageConverter
                    }
                }
            }
        }
    }
}
