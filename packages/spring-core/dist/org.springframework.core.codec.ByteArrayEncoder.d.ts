declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Encoder for {@code byte} arrays.
                 * @author Arjen Poutsma
                 * @since 5.0
                 */
                // @ts-ignore
                class ByteArrayEncoder extends org.springframework.core.codec.AbstractEncoder<byte[]> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    canEncode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                    // @ts-ignore
                    encode(inputStream: object, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    // @ts-ignore
                    encodeValue(bytes: number /*byte*/[], bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, valueType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): org.springframework.core.io.buffer.DataBuffer
                }
            }
        }
    }
}
