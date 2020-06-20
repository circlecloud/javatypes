declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace cbor {
                    /**
                     * Implementation of {@link org.springframework.http.converter.HttpMessageConverter
                     * HttpMessageConverter} that can read and write the <a href="https://cbor.io/">CBOR</a>
                     * data format using <a href="https://github.com/FasterXML/jackson-dataformats-binary/tree/master/cbor">
                     * the dedicated Jackson 2.x extension</a>.
                     * <p>By default, this converter supports the {@link MediaType#APPLICATION_CBOR_VALUE}
                     * media type. This can be overridden by setting the {@link #setSupportedMediaTypes
                     * supportedMediaTypes} property.
                     * <p>The default constructor uses the default configuration provided by
                     * {@link Jackson2ObjectMapperBuilder}.
                     * <p>Compatible with Jackson 2.9 and higher.
                     * @author Sebastien Deleuze
                     * @since 5.0
                     */
                    // @ts-ignore
                    class MappingJackson2CborHttpMessageConverter extends org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter {
                        /**
                         * Construct a new {@code MappingJackson2CborHttpMessageConverter} using the
                         * default configuration provided by {@code Jackson2ObjectMapperBuilder}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a new {@code MappingJackson2CborHttpMessageConverter} with a
                         * custom {@link ObjectMapper} (must be configured with a {@code CBORFactory}
                         * instance).
                         * <p>You can use {@link Jackson2ObjectMapperBuilder} to build it easily.
                         * @see Jackson2ObjectMapperBuilder#cbor()
                         */
                        // @ts-ignore
                        constructor(objectMapper: ObjectMapper)
                        /**
                         * {@inheritDoc}
                         * The {@code ObjectMapper} must be configured with a {@code CBORFactory} instance.
                         */
                        // @ts-ignore
                        setObjectMapper(objectMapper: ObjectMapper): void
                    }
                }
            }
        }
    }
}
