declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * Implementation of an {@link HttpMessageReader} to read HTML form data, i.e.
                 * request body with media type {@code "application/x-www-form-urlencoded"}.
                 * @author Sebastien Deleuze
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                class FormHttpMessageReader extends org.springframework.http.codec.LoggingCodecSupport implements org.springframework.http.codec.HttpMessageReader<object> {
                    // @ts-ignore
                    constructor()
                    /**
                     * The default charset used by the reader.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_CHARSET: java.nio.charset.Charset
                    /**
                     * Set the default character set to use for reading form data when the
                     * request Content-Type header does not explicitly specify it.
                     * <p>By default this is set to "UTF-8".
                     */
                    // @ts-ignore
                    public setDefaultCharset(charset: java.nio.charset.Charset): void
                    /**
                     * Return the configured default charset.
                     */
                    // @ts-ignore
                    public getDefaultCharset(): java.nio.charset.Charset
                    /**
                     * Set the max number of bytes for input form data. As form data is buffered
                     * before it is parsed, this helps to limit the amount of buffering. Once
                     * the limit is exceeded, {@link DataBufferLimitException} is raised.
                     * <p>By default this is set to 256K.
                     * @param byteCount the max number of bytes to buffer, or -1 for unlimited
                     * @since 5.1.11
                     */
                    // @ts-ignore
                    public setMaxInMemorySize(byteCount: number /*int*/): void
                    /**
                     * Return the {@link #setMaxInMemorySize configured} byte count limit.
                     * @since 5.1.11
                     */
                    // @ts-ignore
                    public getMaxInMemorySize(): number /*int*/
                    // @ts-ignore
                    public canRead(elementType: ResolvableType, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    public read(elementType: ResolvableType, message: org.springframework.http.ReactiveHttpInputMessage, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                    // @ts-ignore
                    public readMono(elementType: ResolvableType, message: org.springframework.http.ReactiveHttpInputMessage, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                    // @ts-ignore
                    public getReadableMediaTypes(): Array<org.springframework.http.MediaType>
                }
            }
        }
    }
}
