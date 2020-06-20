declare namespace org {
    namespace springframework {
        namespace format {
            /**
             * Registers {@link Converter Converters} and {@link Formatter Formatters} with
             * a FormattingConversionService through the {@link FormatterRegistry} SPI.
             * @author Keith Donald
             * @since 3.1
             */
            // @ts-ignore
            interface FormatterRegistrar {
                /**
                 * Register Formatters and Converters with a FormattingConversionService
                 * through a FormatterRegistry SPI.
                 * @param registry the FormatterRegistry instance to use.
                 */
                // @ts-ignore
                registerFormatters(registry: org.springframework.format.FormatterRegistry): void
            }
        }
    }
}
