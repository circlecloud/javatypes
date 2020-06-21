declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Decoder for {@code byte} arrays.
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                class ByteArrayDecoder extends org.springframework.core.codec.AbstractDataBufferDecoder<number /*byte*/[]> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public canDecode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                    // @ts-ignore
                    public decode(dataBuffer: org.springframework.core.io.buffer.DataBuffer, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): number /*byte*/[]
                }
            }
        }
    }
}
