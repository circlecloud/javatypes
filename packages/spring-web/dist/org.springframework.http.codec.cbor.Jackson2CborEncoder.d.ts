declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace cbor {
                    /**
                     * Encode from an {@code Object} to bytes of CBOR objects using Jackson.
                     * Stream encoding is not supported yet.
                     * @author Sebastien Deleuze
                     * @since 5.2
                     * @see Jackson2CborDecoder
                     * @see <a href="https://github.com/spring-projects/spring-framework/issues/20513">Add CBOR support to WebFlux</a>
                     */
                    // @ts-ignore
                    class Jackson2CborEncoder extends org.springframework.http.codec.json.AbstractJackson2Encoder {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(mapper: ObjectMapper, ...mimeTypes: MimeType[])
                        // @ts-ignore
                        public encode(inputStream: object, bufferFactory: DataBufferFactory, elementType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                    }
                }
            }
        }
    }
}
