declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Abstract base class for {@code Decoder} implementations that can decode
                 * a {@code DataBuffer} directly to the target element type.
                 * <p>Sub-classes must implement {@link #decodeDataBuffer} to provide a way to
                 * transform a {@code DataBuffer} to the target data type. The default
                 * {@link #decode} implementation transforms each individual data buffer while
                 * {@link #decodeToMono} applies "reduce" and transforms the aggregated buffer.
                 * <p>Sub-classes can override {@link #decode} in order to split the input stream
                 * along different boundaries (e.g. on new line characters for {@code String})
                 * or always reduce to a single data buffer (e.g. {@code Resource}).
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @param <T> the element type
                 */
                // @ts-ignore
                class AbstractDataBufferDecoder<T> extends org.springframework.core.codec.AbstractDecoder<T> {
                    // @ts-ignore
                    constructor(...supportedMimeTypes: org.springframework.util.MimeType[])
                    /**
                     * Configure a limit on the number of bytes that can be buffered whenever
                     * the input stream needs to be aggregated. This can be a result of
                     * decoding to a single {@code DataBuffer},
                     * {@link java.nio.ByteBuffer ByteBuffer}, {@code byte[]},
                     * {@link org.springframework.core.io.Resource Resource}, {@code String}, etc.
                     * It can also occur when splitting the input stream, e.g. delimited text,
                     * in which case the limit applies to data buffered between delimiters.
                     * <p>By default this is set to 256K.
                     * @param byteCount the max number of bytes to buffer, or -1 for unlimited
                     * @since 5.1.11
                     */
                    // @ts-ignore
                    setMaxInMemorySize(byteCount: number /*int*/): void
                    /**
                     * Return the {@link #setMaxInMemorySize configured} byte count limit.
                     * @since 5.1.11
                     */
                    // @ts-ignore
                    getMaxInMemorySize(): int
                    // @ts-ignore
                    decode(input: object, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    // @ts-ignore
                    decodeToMono(input: object, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    /**
                     * How to decode a {@code DataBuffer} to the target element type.
                     * @deprecated as of 5.2, please implement
                     *  {#link #decode(DataBuffer, ResolvableType, MimeType, Map)} instead
                     */
                    // @ts-ignore
                    decodeDataBuffer(buffer: org.springframework.core.io.buffer.DataBuffer, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): T
                }
            }
        }
    }
}
