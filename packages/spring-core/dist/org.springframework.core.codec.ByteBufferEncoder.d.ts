declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Encoder for {@link ByteBuffer ByteBuffers}.
                 * @author Sebastien Deleuze
                 * @since 5.0
                 */
                // @ts-ignore
                class ByteBufferEncoder extends org.springframework.core.codec.AbstractEncoder<java.nio.ByteBuffer> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public canEncode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                    // @ts-ignore
                    public encode(inputStream: object, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                    // @ts-ignore
                    public encodeValue(byteBuffer: java.nio.ByteBuffer, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, valueType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.springframework.core.io.buffer.DataBuffer
                }
            }
        }
    }
}
