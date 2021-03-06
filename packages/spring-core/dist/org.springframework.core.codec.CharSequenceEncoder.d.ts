declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Encode from a {@code CharSequence} stream to a bytes stream.
                 * @author Sebastien Deleuze
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @see StringDecoder
                 */
                // @ts-ignore
                class CharSequenceEncoder extends org.springframework.core.codec.AbstractEncoder<java.lang.CharSequence> {
                    /**
                     * The default charset used by the encoder.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_CHARSET: java.nio.charset.Charset
                    // @ts-ignore
                    public canEncode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                    // @ts-ignore
                    public encode(inputStream: object, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                    // @ts-ignore
                    public encodeValue(charSequence: java.lang.CharSequence, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, valueType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.springframework.core.io.buffer.DataBuffer
                    /**
                     * Create a {@code CharSequenceEncoder} that supports only "text/plain".
                     */
                    // @ts-ignore
                    public static textPlainOnly(): org.springframework.core.codec.CharSequenceEncoder
                    /**
                     * Create a {@code CharSequenceEncoder} that supports all MIME types.
                     */
                    // @ts-ignore
                    public static allMimeTypes(): org.springframework.core.codec.CharSequenceEncoder
                }
            }
        }
    }
}
