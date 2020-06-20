declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                namespace support {
                    /**
                     * Configuration interface to be implemented by most if not all {@link ConversionService}
                     * types. Consolidates the read-only operations exposed by {@link ConversionService} and
                     * the mutating operations of {@link ConverterRegistry} to allow for convenient ad-hoc
                     * addition and removal of {@link org.springframework.core.convert.converter.Converter
                     * Converters} through. The latter is particularly useful when working against a
                     * {@link org.springframework.core.env.ConfigurableEnvironment ConfigurableEnvironment}
                     * instance in application context bootstrapping code.
                     * @author Chris Beams
                     * @since 3.1
                     * @see org.springframework.core.env.ConfigurablePropertyResolver#getConversionService()
                     * @see org.springframework.core.env.ConfigurableEnvironment
                     * @see org.springframework.context.ConfigurableApplicationContext#getEnvironment()
                     */
                    // @ts-ignore
                    interface ConfigurableConversionService extends org.springframework.core.convert.ConversionService, org.springframework.core.convert.converter.ConverterRegistry {
                    }
                }
            }
        }
    }
}
