declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace json {
                    /**
                     * Decode a byte stream into Smile and convert to Object's with Jackson 2.9,
                     * leveraging non-blocking parsing.
                     * @author Sebastien Deleuze
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     * @see Jackson2JsonEncoder
                     */
                    // @ts-ignore
                    class Jackson2SmileDecoder extends org.springframework.http.codec.json.AbstractJackson2Decoder {
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
