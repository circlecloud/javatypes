declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Simple pass-through encoder for {@link DataBuffer DataBuffers}.
                 * @author Arjen Poutsma
                 * @since 5.0
                 */
                // @ts-ignore
                class DataBufferEncoder extends org.springframework.core.codec.AbstractEncoder<org.springframework.core.io.buffer.DataBuffer> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    canEncode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                    // @ts-ignore
                    encode(inputStream: object, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    // @ts-ignore
                    encodeValue(buffer: org.springframework.core.io.buffer.DataBuffer, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, valueType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): org.springframework.core.io.buffer.DataBuffer
                }
            }
        }
    }
}
