declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Encoder for {@link Resource Resources}.
                 * @author Arjen Poutsma
                 * @since 5.0
                 */
                // @ts-ignore
                class ResourceEncoder extends org.springframework.core.codec.AbstractSingleValueEncoder<org.springframework.core.io.Resource> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(bufferSize: number /*int*/)
                    /**
                     * The default buffer size used by the encoder.
                     */
                    // @ts-ignore
                    readonly DEFAULT_BUFFER_SIZE: number /*int*/
                    // @ts-ignore
                    canEncode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                    // @ts-ignore
                    encode(resource: org.springframework.core.io.Resource, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, type: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                }
            }
        }
    }
}
