declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                /**
                 * Implementation of {@link HttpMessageConverter} that can read/write {@link Resource Resources}
                 * and supports byte range requests.
                 * <p>By default, this converter can read all media types. The {@link MediaTypeFactory} is used
                 * to determine the {@code Content-Type} of written resources.
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @author Kazuki Shimizu
                 * @since 3.0.2
                 */
                // @ts-ignore
                class ResourceHttpMessageConverter extends org.springframework.http.converter.AbstractHttpMessageConverter<Resource> {
                    /**
                     * Create a new instance of the {@code ResourceHttpMessageConverter}
                     * that supports read streaming, i.e. can convert an
                     * {@code HttpInputMessage} to {@code InputStreamResource}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new instance of the {@code ResourceHttpMessageConverter}.
                     * @param supportsReadStreaming whether the converter should support
                     *  read streaming, i.e. convert to {#code InputStreamResource}
                     * @since 5.0
                     */
                    // @ts-ignore
                    constructor(supportsReadStreaming: boolean)
                    // @ts-ignore
                    supports(clazz: java.lang.Class<any>): boolean
                    // @ts-ignore
                    readInternal(clazz: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): Resource
                    // @ts-ignore
                    getDefaultContentType(resource: Resource): org.springframework.http.MediaType
                    // @ts-ignore
                    getContentLength(resource: Resource, contentType: org.springframework.http.MediaType): number
                    // @ts-ignore
                    writeInternal(resource: Resource, outputMessage: org.springframework.http.HttpOutputMessage): void
                    // @ts-ignore
                    writeContent(resource: Resource, outputMessage: org.springframework.http.HttpOutputMessage): void
                }
            }
        }
    }
}
