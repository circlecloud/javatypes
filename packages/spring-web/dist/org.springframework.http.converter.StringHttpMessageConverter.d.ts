declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                /**
                 * Implementation of {@link HttpMessageConverter} that can read and write strings.
                 * <p>By default, this converter supports all media types (<code>&#42;/&#42;</code>),
                 * and writes with a {@code Content-Type} of {@code text/plain}. This can be overridden
                 * by setting the {@link #setSupportedMediaTypes supportedMediaTypes} property.
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class StringHttpMessageConverter extends org.springframework.http.converter.AbstractHttpMessageConverter<java.lang.String | string> {
                    /**
                     * A default constructor that uses {@code "ISO-8859-1"} as the default charset.
                     * @see #StringHttpMessageConverter(Charset)
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * A constructor accepting a default charset to use if the requested content
                     * type does not specify one.
                     */
                    // @ts-ignore
                    constructor(defaultCharset: java.nio.charset.Charset)
                    /**
                     * The default charset used by the converter.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_CHARSET: java.nio.charset.Charset
                    /**
                     * Whether the {@code Accept-Charset} header should be written to any outgoing
                     * request sourced from the value of {@link Charset#availableCharsets()}.
                     * The behavior is suppressed if the header has already been set.
                     * <p>As of 5.2, by default is set to {@code false}.
                     */
                    // @ts-ignore
                    public setWriteAcceptCharset(writeAcceptCharset: boolean): void
                    // @ts-ignore
                    public supports(clazz: java.lang.Class<any>): boolean
                    // @ts-ignore
                    readInternal(clazz: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): string
                    // @ts-ignore
                    getContentLength(str: java.lang.String | string, contentType: org.springframework.http.MediaType): number
                    // @ts-ignore
                    addDefaultHeaders(headers: org.springframework.http.HttpHeaders, s: java.lang.String | string, type: org.springframework.http.MediaType): void
                    // @ts-ignore
                    writeInternal(str: java.lang.String | string, outputMessage: org.springframework.http.HttpOutputMessage): void
                    /**
                     * Return the list of supported {@link Charset Charsets}.
                     * <p>By default, returns {@link Charset#availableCharsets()}.
                     * Can be overridden in subclasses.
                     * @return the list of accepted charsets
                     */
                    // @ts-ignore
                    getAcceptedCharsets(): Array<java.nio.charset.Charset>
                }
            }
        }
    }
}
