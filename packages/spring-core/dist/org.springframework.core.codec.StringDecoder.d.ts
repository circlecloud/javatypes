declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Decode from a data buffer stream to a {@code String} stream. Before decoding, this decoder
                 * realigns the incoming data buffers so that each buffer ends with a newline.
                 * This is to make sure that multibyte characters are decoded properly, and do not cross buffer
                 * boundaries. The default delimiters ({@code \n}, {@code \r\n})can be customized.
                 * <p>Partially inspired by Netty's {@code DelimiterBasedFrameDecoder}.
                 * @author Sebastien Deleuze
                 * @author Brian Clozel
                 * @author Arjen Poutsma
                 * @author Mark Paluch
                 * @since 5.0
                 * @see CharSequenceEncoder
                 */
                // @ts-ignore
                class StringDecoder extends org.springframework.core.codec.AbstractDataBufferDecoder<java.lang.String> {
                    /**
                     * The default charset to use, i.e. "UTF-8".
                     */
                    // @ts-ignore
                    readonly DEFAULT_CHARSET: java.nio.charset.Charset
                    /**
                     * The default delimiter strings to use, i.e. {@code \r\n} and {@code \n}.
                     */
                    // @ts-ignore
                    readonly DEFAULT_DELIMITERS: Array<java.lang.String>
                    // @ts-ignore
                    canDecode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                    // @ts-ignore
                    decode(input: object, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    /**
                     * Create a {@code StringDecoder} for {@code "text/plain"}.
                     * @param stripDelimiter this flag is ignored
                     * @deprecated as of Spring 5.0.4, in favor of {#link #textPlainOnly()} or
                     *  {@link #textPlainOnly(List, boolean)}
                     */
                    // @ts-ignore
                    textPlainOnly(stripDelimiter: boolean): org.springframework.core.codec.StringDecoder
                    /**
                     * Create a {@code StringDecoder} for {@code "text/plain"}.
                     */
                    // @ts-ignore
                    textPlainOnly(): org.springframework.core.codec.StringDecoder
                    /**
                     * Create a {@code StringDecoder} for {@code "text/plain"}.
                     * @param delimiters delimiter strings to use to split the input stream
                     * @param stripDelimiter whether to remove delimiters from the resulting
                     *  input strings
                     */
                    // @ts-ignore
                    textPlainOnly(delimiters: Array<java.lang.String>, stripDelimiter: boolean): org.springframework.core.codec.StringDecoder
                    /**
                     * Create a {@code StringDecoder} that supports all MIME types.
                     * @param stripDelimiter this flag is ignored
                     * @deprecated as of Spring 5.0.4, in favor of {#link #allMimeTypes()} or
                     *  {@link #allMimeTypes(List, boolean)}
                     */
                    // @ts-ignore
                    allMimeTypes(stripDelimiter: boolean): org.springframework.core.codec.StringDecoder
                    /**
                     * Create a {@code StringDecoder} that supports all MIME types.
                     */
                    // @ts-ignore
                    allMimeTypes(): org.springframework.core.codec.StringDecoder
                    /**
                     * Create a {@code StringDecoder} that supports all MIME types.
                     * @param delimiters delimiter strings to use to split the input stream
                     * @param stripDelimiter whether to remove delimiters from the resulting
                     *  input strings
                     */
                    // @ts-ignore
                    allMimeTypes(delimiters: Array<java.lang.String>, stripDelimiter: boolean): org.springframework.core.codec.StringDecoder
                }
            }
        }
    }
}
