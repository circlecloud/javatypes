declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Decoder for {@link ByteBuffer ByteBuffers}.
                 * @author Sebastien Deleuze
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                class ByteBufferDecoder extends org.springframework.core.codec.AbstractDataBufferDecoder<java.nio.ByteBuffer> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public canDecode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                    // @ts-ignore
                    public decode(dataBuffer: org.springframework.core.io.buffer.DataBuffer, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): java.nio.ByteBuffer
                }
            }
        }
    }
}
