declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace xml {
                    /**
                     * Decode from a bytes stream containing XML elements to a stream of
                     * {@code Object}s (POJOs).
                     * @author Sebastien Deleuze
                     * @author Arjen Poutsma
                     * @since 5.0
                     * @see Jaxb2XmlEncoder
                     */
                    // @ts-ignore
                    class Jaxb2XmlDecoder extends <any> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a {@code Jaxb2XmlDecoder} with the specified MIME types.
                         * @param supportedMimeTypes supported MIME types
                         * @since 5.1.9
                         */
                        // @ts-ignore
                        constructor(...supportedMimeTypes: MimeType[])
                        /**
                         * Configure a processor function to customize Unmarshaller instances.
                         * @param processor the function to use
                         * @since 5.1.3
                         */
                        // @ts-ignore
                        setUnmarshallerProcessor(processor: java.util.function.Function<javax.xml.bind.Unmarshaller, javax.xml.bind.Unmarshaller> | java.util.function$.Function<javax.xml.bind.Unmarshaller, javax.xml.bind.Unmarshaller>): void
                        /**
                         * Return the configured processor for customizing Unmarshaller instances.
                         * @since 5.1.3
                         */
                        // @ts-ignore
                        getUnmarshallerProcessor(): java.util.function.Function<javax.xml.bind.Unmarshaller, javax.xml.bind.Unmarshaller>
                        /**
                         * Set the max number of bytes that can be buffered by this decoder.
                         * This is either the size of the entire input when decoding as a whole, or when
                         * using async parsing with Aalto XML, it is the size of one top-level XML tree.
                         * When the limit is exceeded, {@link DataBufferLimitException} is raised.
                         * <p>By default this is set to 256K.
                         * @param byteCount the max number of bytes to buffer, or -1 for unlimited
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        setMaxInMemorySize(byteCount: number /*int*/): void
                        /**
                         * Return the {@link #setMaxInMemorySize configured} byte count limit.
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        getMaxInMemorySize(): int
                        // @ts-ignore
                        canDecode(elementType: ResolvableType, mimeType: MimeType): boolean
                        // @ts-ignore
                        decode(inputStream: object, elementType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                        // @ts-ignore
                        decodeToMono(input: object, elementType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                        // @ts-ignore
                        decode(dataBuffer: DataBuffer, targetType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): java.lang.Object
                    }
                }
            }
        }
    }
}
