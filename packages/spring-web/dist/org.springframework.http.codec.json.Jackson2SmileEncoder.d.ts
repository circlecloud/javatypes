declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace json {
                    /**
                     * Encode from an {@code Object} stream to a byte stream of Smile objects using Jackson 2.9.
                     * For non-streaming use cases, {@link Flux} elements are collected into a {@link List}
                     * before serialization for performance reason.
                     * @author Sebastien Deleuze
                     * @since 5.0
                     * @see Jackson2SmileDecoder
                     */
                    // @ts-ignore
                    class Jackson2SmileEncoder extends org.springframework.http.codec.json.AbstractJackson2Encoder {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(mapper: ObjectMapper, ...mimeTypes: MimeType[])
                    }
                }
            }
        }
    }
}
