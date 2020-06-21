declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                /**
                 * An {@code HttpMessageConverter} that uses {@link StringHttpMessageConverter}
                 * for reading and writing content and a {@link ConversionService} for converting
                 * the String content to and from the target object type.
                 * <p>By default, this converter supports the media type {@code text/plain} only.
                 * This can be overridden through the {@link #setSupportedMediaTypes supportedMediaTypes}
                 * property.
                 * <p>A usage example:
                 * <pre class="code">
                 * &lt;bean class="org.springframework.http.converter.ObjectToStringHttpMessageConverter">
                 * &lt;constructor-arg>
                 * &lt;bean class="org.springframework.context.support.ConversionServiceFactoryBean"/>
                 * &lt;/constructor-arg>
                 * &lt;/bean>
                 * </pre>
                 * @author <a href="mailto:dmitry.katsubo#gmail.com">Dmitry Katsubo</a>
                 * @author Rossen Stoyanchev
                 * @since 3.2
                 */
                // @ts-ignore
                class ObjectToStringHttpMessageConverter extends org.springframework.http.converter.AbstractHttpMessageConverter<java.lang.Object | any> {
                    /**
                     * A constructor accepting a {@code ConversionService} to use to convert the
                     * (String) message body to/from the target class type. This constructor uses
                     * {@link StringHttpMessageConverter#DEFAULT_CHARSET} as the default charset.
                     * @param conversionService the conversion service
                     */
                    // @ts-ignore
                    constructor(conversionService: ConversionService)
                    /**
                     * A constructor accepting a {@code ConversionService} as well as a default charset.
                     * @param conversionService the conversion service
                     * @param defaultCharset the default charset
                     */
                    // @ts-ignore
                    constructor(conversionService: ConversionService, defaultCharset: java.nio.charset.Charset)
                    /**
                     * Delegates to {@link StringHttpMessageConverter#setWriteAcceptCharset(boolean)}.
                     */
                    // @ts-ignore
                    public setWriteAcceptCharset(writeAcceptCharset: boolean): void
                    // @ts-ignore
                    public canRead(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    public canWrite(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    supports(clazz: java.lang.Class<any>): boolean
                    // @ts-ignore
                    readInternal(clazz: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): any
                    // @ts-ignore
                    writeInternal(obj: java.lang.Object | any, outputMessage: org.springframework.http.HttpOutputMessage): void
                    // @ts-ignore
                    getContentLength(obj: java.lang.Object | any, contentType: org.springframework.http.MediaType): number
                }
            }
        }
    }
}
