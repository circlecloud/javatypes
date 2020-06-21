declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace xml {
                    /**
                     * Encode from single value to a byte stream containing XML elements.
                     * <p>{@link javax.xml.bind.annotation.XmlElements @XmlElements} and
                     * {@link javax.xml.bind.annotation.XmlElement @XmlElement} can be used
                     * to specify how collections should be marshalled.
                     * @author Sebastien Deleuze
                     * @author Arjen Poutsma
                     * @since 5.0
                     * @see Jaxb2XmlDecoder
                     */
                    // @ts-ignore
                    class Jaxb2XmlEncoder extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Configure a processor function to customize Marshaller instances.
                         * @param processor the function to use
                         * @since 5.1.3
                         */
                        // @ts-ignore
                        public setMarshallerProcessor(processor: java.util.function$.Function<javax.xml.bind.Marshaller, javax.xml.bind.Marshaller>): void
                        /**
                         * Return the configured processor for customizing Marshaller instances.
                         * @since 5.1.3
                         */
                        // @ts-ignore
                        public getMarshallerProcessor(): java.util.function$.Function<javax.xml.bind.Marshaller, javax.xml.bind.Marshaller>
                        // @ts-ignore
                        public canEncode(elementType: ResolvableType, mimeType: MimeType): boolean
                        // @ts-ignore
                        encode(value: java.lang.Object | any, bufferFactory: DataBufferFactory, valueType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                        // @ts-ignore
                        public encodeValue(value: java.lang.Object | any, bufferFactory: DataBufferFactory, valueType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): DataBuffer
                    }
                }
            }
        }
    }
}
