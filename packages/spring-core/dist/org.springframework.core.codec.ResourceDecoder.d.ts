declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Decoder for {@link Resource Resources}.
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                class ResourceDecoder extends org.springframework.core.codec.AbstractDataBufferDecoder<org.springframework.core.io.Resource> {
                    // @ts-ignore
                    constructor()
                    /**
                     * Name of hint with a filename for the resource(e.g. from "Content-Disposition" HTTP header).
                     */
                    // @ts-ignore
                    public static FILENAME_HINT: java.lang.String | string
                    // @ts-ignore
                    public canDecode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                    // @ts-ignore
                    public decode(inputStream: object, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                }
            }
        }
    }
}
