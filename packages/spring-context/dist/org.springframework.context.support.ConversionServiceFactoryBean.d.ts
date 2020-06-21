declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * A factory providing convenient access to a ConversionService configured with
                 * converters appropriate for most environments. Set the
                 * {@link #setConverters "converters"} property to supplement the default converters.
                 * <p>This implementation creates a {@link DefaultConversionService}.
                 * Subclasses may override {@link #createConversionService()} in order to return
                 * a {@link GenericConversionService} instance of their choosing.
                 * <p>Like all {@code FactoryBean} implementations, this class is suitable for
                 * use when configuring a Spring application context using Spring {@code <beans>}
                 * XML. When configuring the container with
                 * {@link org.springframework.context.annotation.Configuration @Configuration}
                 * classes, simply instantiate, configure and return the appropriate
                 * {@code ConversionService} object from a {@link
                 * org.springframework.context.annotation.Bean @Bean} method.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @since 3.0
                 */
                // @ts-ignore
                class ConversionServiceFactoryBean extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Configure the set of custom converter objects that should be added:
                     * implementing {@link org.springframework.core.convert.converter.Converter},
                     * {@link org.springframework.core.convert.converter.ConverterFactory},
                     * or {@link org.springframework.core.convert.converter.GenericConverter}.
                     */
                    // @ts-ignore
                    public setConverters(converters: java.util.Set<any> | Array<any>): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    /**
                     * Create the ConversionService instance returned by this factory bean.
                     * <p>Creates a simple {@link GenericConversionService} instance by default.
                     * Subclasses may override to customize the ConversionService instance that
                     * gets created.
                     */
                    // @ts-ignore
                    createConversionService(): GenericConversionService
                    // @ts-ignore
                    public getObject(): ConversionService
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    // @ts-ignore
                    public isSingleton(): boolean
                }
            }
        }
    }
}
