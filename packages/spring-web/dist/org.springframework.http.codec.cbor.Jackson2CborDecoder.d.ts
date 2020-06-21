declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace cbor {
                    /**
                     * Decode bytes into CBOR and convert to Object's with Jackson.
                     * Stream decoding is not supported yet.
                     * @author Sebastien Deleuze
                     * @since 5.2
                     * @see Jackson2CborEncoder
                     * @see <a href="https://github.com/spring-projects/spring-framework/issues/20513">Add CBOR support to WebFlux</a>
                     */
                    // @ts-ignore
                    class Jackson2CborDecoder extends org.springframework.http.codec.json.AbstractJackson2Decoder {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(mapper: ObjectMapper, ...mimeTypes: MimeType[])
                        // @ts-ignore
                        public decode(input: object, elementType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                    }
                }
            }
        }
    }
}
