declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace json {
                    /**
                     * Encode from an {@code Object} stream to a byte stream of JSON objects using Jackson 2.9.
                     * For non-streaming use cases, {@link Flux} elements are collected into a {@link List}
                     * before serialization for performance reason.
                     * @author Sebastien Deleuze
                     * @author Arjen Poutsma
                     * @since 5.0
                     * @see Jackson2JsonDecoder
                     */
                    // @ts-ignore
                    class Jackson2JsonEncoder extends org.springframework.http.codec.json.AbstractJackson2Encoder {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(mapper: ObjectMapper, ...mimeTypes: MimeType[])
                        // @ts-ignore
                        customizeWriter(writer: ObjectWriter, mimeType: MimeType, elementType: ResolvableType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): ObjectWriter
                    }
                }
            }
        }
    }
}
