declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace smile {
                    /**
                     * Implementation of {@link org.springframework.http.converter.HttpMessageConverter HttpMessageConverter}
                     * that can read and write Smile data format ("binary JSON") using
                     * <a href="https://github.com/FasterXML/jackson-dataformats-binary/tree/master/smile">
                     * the dedicated Jackson 2.x extension</a>.
                     * <p>By default, this converter supports {@code "application/x-jackson-smile"} media type.
                     * This can be overridden by setting the {@link #setSupportedMediaTypes supportedMediaTypes} property.
                     * <p>The default constructor uses the default configuration provided by {@link Jackson2ObjectMapperBuilder}.
                     * <p>Compatible with Jackson 2.9 and higher.
                     * @author Sebastien Deleuze
                     * @since 5.0
                     */
                    // @ts-ignore
                    class MappingJackson2SmileHttpMessageConverter extends org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter {
                        /**
                         * Construct a new {@code MappingJackson2SmileHttpMessageConverter} using default configuration
                         * provided by {@code Jackson2ObjectMapperBuilder}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a new {@code MappingJackson2SmileHttpMessageConverter} with a custom {@link ObjectMapper}
                         * (must be configured with a {@code SmileFactory} instance).
                         * You can use {@link Jackson2ObjectMapperBuilder} to build it easily.
                         * @see Jackson2ObjectMapperBuilder#smile()
                         */
                        // @ts-ignore
                        constructor(objectMapper: ObjectMapper)
                        /**
                         * {@inheritDoc}
                         * The {@code ObjectMapper} must be configured with a {@code SmileFactory} instance.
                         */
                        // @ts-ignore
                        public setObjectMapper(objectMapper: ObjectMapper): void
                    }
                }
            }
        }
    }
}
