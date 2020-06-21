declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                /**
                 * Abstract base class for most {@link HttpMessageConverter} implementations.
                 * <p>This base class adds support for setting supported {@code MediaTypes}, through the
                 * {@link #setSupportedMediaTypes(List) supportedMediaTypes} bean property. It also adds
                 * support for {@code Content-Type} and {@code Content-Length} when writing to output messages.
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @author Sebastien Deleuze
                 * @since 3.0
                 * @param <T> the converted object type
                 */
                // @ts-ignore
                abstract class AbstractHttpMessageConverter<T> extends java.lang.Object implements org.springframework.http.converter.HttpMessageConverter<T> {
                    /**
                     * Construct an {@code AbstractHttpMessageConverter} with no supported media types.
                     * @see #setSupportedMediaTypes
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct an {@code AbstractHttpMessageConverter} with one supported media type.
                     * @param supportedMediaType the supported media type
                     */
                    // @ts-ignore
                    constructor(supportedMediaType: org.springframework.http.MediaType)
                    /**
                     * Construct an {@code AbstractHttpMessageConverter} with multiple supported media types.
                     * @param supportedMediaTypes the supported media types
                     */
                    // @ts-ignore
                    constructor(...supportedMediaTypes: org.springframework.http.MediaType[])
                    /**
                     * Construct an {@code AbstractHttpMessageConverter} with a default charset and
                     * multiple supported media types.
                     * @param defaultCharset the default character set
                     * @param supportedMediaTypes the supported media types
                     * @since 4.3
                     */
                    // @ts-ignore
                    constructor(defaultCharset: java.nio.charset.Charset, ...supportedMediaTypes: org.springframework.http.MediaType[])
                    /**
                     * Logger available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Set the list of {@link MediaType} objects supported by this converter.
                     */
                    // @ts-ignore
                    public setSupportedMediaTypes(supportedMediaTypes: java.util.List<org.springframework.http.MediaType> | Array<org.springframework.http.MediaType>): void
                    // @ts-ignore
                    public getSupportedMediaTypes(): Array<org.springframework.http.MediaType>
                    /**
                     * Set the default character set, if any.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public setDefaultCharset(defaultCharset: java.nio.charset.Charset): void
                    /**
                     * Return the default character set, if any.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public getDefaultCharset(): java.nio.charset.Charset
                    /**
                     * This implementation checks if the given class is {@linkplain #supports(Class) supported},
                     * and if the {@linkplain #getSupportedMediaTypes() supported media types}
                     * {@linkplain MediaType#includes(MediaType) include} the given media type.
                     */
                    // @ts-ignore
                    public canRead(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    /**
                     * Returns {@code true} if any of the {@linkplain #setSupportedMediaTypes(List)
                     * supported} media types {@link MediaType#includes(MediaType) include} the
                     * given media type.
                     * @param mediaType the media type to read, can be {#code null} if not specified.
                     *  Typically the value of a {@code Content-Type} header.
                     * @return {#code true} if the supported media types include the media type,
                     *  or if the media type is {@code null}
                     */
                    // @ts-ignore
                    canRead(mediaType: org.springframework.http.MediaType): boolean
                    /**
                     * This implementation checks if the given class is
                     * {@linkplain #supports(Class) supported}, and if the
                     * {@linkplain #getSupportedMediaTypes() supported} media types
                     * {@linkplain MediaType#includes(MediaType) include} the given media type.
                     */
                    // @ts-ignore
                    public canWrite(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    /**
                     * Returns {@code true} if the given media type includes any of the
                     * {@linkplain #setSupportedMediaTypes(List) supported media types}.
                     * @param mediaType the media type to write, can be {#code null} if not specified.
                     *  Typically the value of an {@code Accept} header.
                     * @return {#code true} if the supported media types are compatible with the media type,
                     *  or if the media type is {@code null}
                     */
                    // @ts-ignore
                    canWrite(mediaType: org.springframework.http.MediaType): boolean
                    /**
                     * This implementation simple delegates to {@link #readInternal(Class, HttpInputMessage)}.
                     * Future implementations might add some default behavior, however.
                     */
                    // @ts-ignore
                    public read(clazz: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): T
                    /**
                     * This implementation sets the default headers by calling {@link #addDefaultHeaders},
                     * and then calls {@link #writeInternal}.
                     */
                    // @ts-ignore
                    public write(t: T, contentType: org.springframework.http.MediaType, outputMessage: org.springframework.http.HttpOutputMessage): void
                    /**
                     * Add default headers to the output message.
                     * <p>This implementation delegates to {@link #getDefaultContentType(Object)} if a
                     * content type was not provided, set if necessary the default character set, calls
                     * {@link #getContentLength}, and sets the corresponding headers.
                     * @since 4.2
                     */
                    // @ts-ignore
                    addDefaultHeaders(headers: org.springframework.http.HttpHeaders, t: T, contentType: org.springframework.http.MediaType): void
                    /**
                     * Returns the default content type for the given type. Called when {@link #write}
                     * is invoked without a specified content type parameter.
                     * <p>By default, this returns the first element of the
                     * {@link #setSupportedMediaTypes(List) supportedMediaTypes} property, if any.
                     * Can be overridden in subclasses.
                     * @param t the type to return the content type for
                     * @return the content type, or {#code null} if not known
                     */
                    // @ts-ignore
                    getDefaultContentType(t: T): org.springframework.http.MediaType
                    /**
                     * Returns the content length for the given type.
                     * <p>By default, this returns {@code null}, meaning that the content length is unknown.
                     * Can be overridden in subclasses.
                     * @param t the type to return the content length for
                     * @return the content length, or {#code null} if not known
                     */
                    // @ts-ignore
                    getContentLength(t: T, contentType: org.springframework.http.MediaType): number
                    /**
                     * Indicates whether the given class is supported by this converter.
                     * @param clazz the class to test for support
                     * @return {#code true} if supported; {@code false} otherwise
                     */
                    // @ts-ignore
                    abstract supports(clazz: java.lang.Class<any>): boolean
                    /**
                     * Abstract template method that reads the actual object. Invoked from {@link #read}.
                     * @param clazz the type of object to return
                     * @param inputMessage the HTTP input message to read from
                     * @return the converted object
                     * @throws IOException in case of I/O errors
                     * @throws HttpMessageNotReadableException in case of conversion errors
                     */
                    // @ts-ignore
                    abstract readInternal(clazz: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): T
                    /**
                     * Abstract template method that writes the actual body. Invoked from {@link #write}.
                     * @param t the object to write to the output message
                     * @param outputMessage the HTTP output message to write to
                     * @throws IOException in case of I/O errors
                     * @throws HttpMessageNotWritableException in case of conversion errors
                     */
                    // @ts-ignore
                    abstract writeInternal(t: T, outputMessage: org.springframework.http.HttpOutputMessage): void
                }
            }
        }
    }
}
