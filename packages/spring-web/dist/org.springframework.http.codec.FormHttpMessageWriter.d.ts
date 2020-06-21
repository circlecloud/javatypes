declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * {@link HttpMessageWriter} for writing a {@code MultiValueMap<String, String>}
                 * as HTML form data, i.e. {@code "application/x-www-form-urlencoded"}, to the
                 * body of a request.
                 * <p>Note that unless the media type is explicitly set to
                 * {@link MediaType#APPLICATION_FORM_URLENCODED}, the {@link #canWrite} method
                 * will need generic type information to confirm the target map has String values.
                 * This is because a MultiValueMap with non-String values can be used to write
                 * multipart requests.
                 * <p>To support both form data and multipart requests, consider using
                 * {@link org.springframework.http.codec.multipart.MultipartHttpMessageWriter}
                 * configured with this writer as the fallback for writing plain form data.
                 * @author Sebastien Deleuze
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @see org.springframework.http.codec.multipart.MultipartHttpMessageWriter
                 */
                // @ts-ignore
                class FormHttpMessageWriter extends org.springframework.http.codec.LoggingCodecSupport implements org.springframework.http.codec.HttpMessageWriter<object> {
                    // @ts-ignore
                    constructor()
                    /**
                     * The default charset used by the writer.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_CHARSET: java.nio.charset.Charset
                    /**
                     * Set the default character set to use for writing form data when the response
                     * Content-Type header does not explicitly specify it.
                     * <p>By default this is set to "UTF-8".
                     */
                    // @ts-ignore
                    public setDefaultCharset(charset: java.nio.charset.Charset): void
                    /**
                     * Return the configured default charset.
                     */
                    // @ts-ignore
                    public getDefaultCharset(): java.nio.charset.Charset
                    // @ts-ignore
                    public getWritableMediaTypes(): Array<org.springframework.http.MediaType>
                    // @ts-ignore
                    public canWrite(elementType: ResolvableType, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    public write(inputStream: object, elementType: ResolvableType, mediaType: org.springframework.http.MediaType, message: org.springframework.http.ReactiveHttpOutputMessage, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                    // @ts-ignore
                    getMediaType(mediaType: org.springframework.http.MediaType): org.springframework.http.MediaType
                    // @ts-ignore
                    serializeForm(formData: object, charset: java.nio.charset.Charset): string
                }
            }
        }
    }
}
