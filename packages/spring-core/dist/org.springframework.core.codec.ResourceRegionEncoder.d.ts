declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Encoder for {@link ResourceRegion ResourceRegions}.
                 * @author Brian Clozel
                 * @since 5.0
                 */
                // @ts-ignore
                class ResourceRegionEncoder extends org.springframework.core.codec.AbstractEncoder<org.springframework.core.io.support.ResourceRegion> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(bufferSize: number /*int*/)
                    /**
                     * The default buffer size used by the encoder.
                     */
                    // @ts-ignore
                    readonly DEFAULT_BUFFER_SIZE: number /*int*/
                    /**
                     * The hint key that contains the boundary string.
                     */
                    // @ts-ignore
                    readonly BOUNDARY_STRING_HINT: string
                    // @ts-ignore
                    canEncode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                    // @ts-ignore
                    encode(input: object, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                }
            }
        }
    }
}
