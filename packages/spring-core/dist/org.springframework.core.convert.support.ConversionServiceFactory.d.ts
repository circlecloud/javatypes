declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                namespace support {
                    /**
                     * A factory for common {@link org.springframework.core.convert.ConversionService}
                     * configurations.
                     * @author Keith Donald
                     * @author Juergen Hoeller
                     * @author Chris Beams
                     * @since 3.0
                     */
                    // @ts-ignore
                    class ConversionServiceFactory extends java.lang.Object {
                        /**
                         * Register the given Converter objects with the given target ConverterRegistry.
                         * @param converters the converter objects: implementing {#link Converter},
                         *  {@link ConverterFactory}, or {@link GenericConverter}
                         * @param registry the target registry
                         */
                        // @ts-ignore
                        public static registerConverters(converters: java.util.Set<any> | Array<any>, registry: org.springframework.core.convert.converter.ConverterRegistry): void
                    }
                }
            }
        }
    }
}
