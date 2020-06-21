declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                namespace support {
                    /**
                     * A specialization of {@link GenericConversionService} configured by default
                     * with converters appropriate for most environments.
                     * <p>Designed for direct instantiation but also exposes the static
                     * {@link #addDefaultConverters(ConverterRegistry)} utility method for ad-hoc
                     * use against any {@code ConverterRegistry} instance.
                     * @author Chris Beams
                     * @author Juergen Hoeller
                     * @author Stephane Nicoll
                     * @since 3.1
                     */
                    // @ts-ignore
                    class DefaultConversionService extends org.springframework.core.convert.support.GenericConversionService {
                        /**
                         * Create a new {@code DefaultConversionService} with the set of
                         * {@linkplain DefaultConversionService#addDefaultConverters(ConverterRegistry) default converters}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Return a shared default {@code ConversionService} instance,
                         * lazily building it once needed.
                         * <p><b>NOTE:</b> We highly recommend constructing individual
                         * {@code ConversionService} instances for customization purposes.
                         * This accessor is only meant as a fallback for code paths which
                         * need simple type coercion but cannot access a longer-lived
                         * {@code ConversionService} instance any other way.
                         * @return the shared {#code ConversionService} instance (never {@code null})
                         * @since 4.3.5
                         */
                        // @ts-ignore
                        public static getSharedInstance(): org.springframework.core.convert.ConversionService
                        /**
                         * Add converters appropriate for most environments.
                         * @param converterRegistry the registry of converters to add to
                         *  (must also be castable to ConversionService, e.g. being a {#link ConfigurableConversionService})
                         * @throws ClassCastException if the given ConverterRegistry could not be cast to a ConversionService
                         */
                        // @ts-ignore
                        public static addDefaultConverters(converterRegistry: org.springframework.core.convert.converter.ConverterRegistry): void
                        /**
                         * Add common collection converters.
                         * @param converterRegistry the registry of converters to add to
                         *  (must also be castable to ConversionService, e.g. being a {#link ConfigurableConversionService})
                         * @throws ClassCastException if the given ConverterRegistry could not be cast to a ConversionService
                         * @since 4.2.3
                         */
                        // @ts-ignore
                        public static addCollectionConverters(converterRegistry: org.springframework.core.convert.converter.ConverterRegistry): void
                    }
                }
            }
        }
    }
}
