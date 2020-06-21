declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                /**
                 * Abstract base class for most {@link GenericHttpMessageConverter} implementations.
                 * @author Sebastien Deleuze
                 * @author Juergen Hoeller
                 * @since 4.2
                 * @param <T> the converted object type
                 */
                // @ts-ignore
                abstract class AbstractGenericHttpMessageConverter<T> extends org.springframework.http.converter.AbstractHttpMessageConverter<T> implements org.springframework.http.converter.GenericHttpMessageConverter<T> {
                    /**
                     * Construct an {@code AbstractGenericHttpMessageConverter} with no supported media types.
                     * @see #setSupportedMediaTypes
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct an {@code AbstractGenericHttpMessageConverter} with one supported media type.
                     * @param supportedMediaType the supported media type
                     */
                    // @ts-ignore
                    constructor(supportedMediaType: org.springframework.http.MediaType)
                    /**
                     * Construct an {@code AbstractGenericHttpMessageConverter} with multiple supported media type.
                     * @param supportedMediaTypes the supported media types
                     */
                    // @ts-ignore
                    constructor(...supportedMediaTypes: org.springframework.http.MediaType[])
                    // @ts-ignore
                    supports(clazz: java.lang.Class<any>): boolean
                    // @ts-ignore
                    public canRead(type: java.lang.reflect.Type, contextClass: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    public canWrite(type: java.lang.reflect.Type, clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    /**
                     * This implementation sets the default headers by calling {@link #addDefaultHeaders},
                     * and then calls {@link #writeInternal}.
                     */
                    // @ts-ignore
                    public write(t: T, type: java.lang.reflect.Type, contentType: org.springframework.http.MediaType, outputMessage: org.springframework.http.HttpOutputMessage): void
                    // @ts-ignore
                    writeInternal(t: T, outputMessage: org.springframework.http.HttpOutputMessage): void
                    /**
                     * Abstract template method that writes the actual body. Invoked from {@link #write}.
                     * @param t the object to write to the output message
                     * @param type the type of object to write (may be {#code null})
                     * @param outputMessage the HTTP output message to write to
                     * @throws IOException in case of I/O errors
                     * @throws HttpMessageNotWritableException in case of conversion errors
                     */
                    // @ts-ignore
                    abstract writeInternal(t: T, type: java.lang.reflect.Type, outputMessage: org.springframework.http.HttpOutputMessage): void
                }
            }
        }
    }
}
