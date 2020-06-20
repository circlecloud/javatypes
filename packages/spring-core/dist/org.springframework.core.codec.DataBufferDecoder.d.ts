declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Simple pass-through decoder for {@link DataBuffer DataBuffers}.
                 * <p><strong>Note:</strong> The data buffers should be released via
                 * {@link org.springframework.core.io.buffer.DataBufferUtils#release(DataBuffer)}
                 * after they have been consumed. In addition, if using {@code Flux} or
                 * {@code Mono} operators such as flatMap, reduce, and others that prefetch,
                 * cache, and skip or filter out data items internally, please add
                 * {@code doOnDiscard(PooledDataBuffer.class, DataBufferUtils::release)} to the
                 * composition chain to ensure cached data buffers are released prior to an
                 * error or cancellation signal.
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                class DataBufferDecoder extends org.springframework.core.codec.AbstractDataBufferDecoder<org.springframework.core.io.buffer.DataBuffer> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    canDecode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                    // @ts-ignore
                    decode(input: object, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                }
            }
        }
    }
}
