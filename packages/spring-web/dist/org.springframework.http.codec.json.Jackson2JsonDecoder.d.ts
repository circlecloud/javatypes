declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace json {
                    /**
                     * Decode a byte stream into JSON and convert to Object's with Jackson 2.9,
                     * leveraging non-blocking parsing.
                     * @author Sebastien Deleuze
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     * @see Jackson2JsonEncoder
                     */
                    // @ts-ignore
                    class Jackson2JsonDecoder extends org.springframework.http.codec.json.AbstractJackson2Decoder {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(mapper: ObjectMapper, ...mimeTypes: MimeType[])
                        // @ts-ignore
                        processInput(input: object, elementType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    }
                }
            }
        }
    }
}
