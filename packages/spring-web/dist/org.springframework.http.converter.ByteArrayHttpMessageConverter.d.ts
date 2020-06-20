declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                /**
                 * Implementation of {@link HttpMessageConverter} that can read and write byte arrays.
                 * <p>By default, this converter supports all media types (<code>&#42;/&#42;</code>), and
                 * writes with a {@code Content-Type} of {@code application/octet-stream}. This can be
                 * overridden by setting the {@link #setSupportedMediaTypes supportedMediaTypes} property.
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class ByteArrayHttpMessageConverter extends org.springframework.http.converter.AbstractHttpMessageConverter<byte[]> {
                    /**
                     * Create a new instance of the {@code ByteArrayHttpMessageConverter}.
                     */
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    supports(clazz: java.lang.Class<any>): boolean
                    // @ts-ignore
                    readInternal(clazz: java.lang.Class<byte[]>, inputMessage: org.springframework.http.HttpInputMessage): byte[]
                    // @ts-ignore
                    getContentLength(bytes: number /*byte*/[], contentType: org.springframework.http.MediaType): java.lang.Long
                    // @ts-ignore
                    writeInternal(bytes: number /*byte*/[], outputMessage: org.springframework.http.HttpOutputMessage): void
                }
            }
        }
    }
}
