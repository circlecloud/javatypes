declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace xml {
                    /**
                     * Implementation of {@link org.springframework.http.converter.HttpMessageConverter HttpMessageConverter}
                     * that can read and write XML using <a href="https://github.com/FasterXML/jackson-dataformat-xml">
                     * Jackson 2.x extension component for reading and writing XML encoded data</a>.
                     * <p>By default, this converter supports {@code application/xml}, {@code text/xml}, and
                     * {@code application/*+xml} with {@code UTF-8} character set. This can be overridden by
                     * setting the {@link #setSupportedMediaTypes supportedMediaTypes} property.
                     * <p>The default constructor uses the default configuration provided by {@link Jackson2ObjectMapperBuilder}.
                     * <p>Compatible with Jackson 2.9 and higher, as of Spring 5.0.
                     * @author Sebastien Deleuze
                     * @since 4.1
                     */
                    // @ts-ignore
                    class MappingJackson2XmlHttpMessageConverter extends org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter {
                        /**
                         * Construct a new {@code MappingJackson2XmlHttpMessageConverter} using default configuration
                         * provided by {@code Jackson2ObjectMapperBuilder}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a new {@code MappingJackson2XmlHttpMessageConverter} with a custom {@link ObjectMapper}
                         * (must be a {@link XmlMapper} instance).
                         * You can use {@link Jackson2ObjectMapperBuilder} to build it easily.
                         * @see Jackson2ObjectMapperBuilder#xml()
                         */
                        // @ts-ignore
                        constructor(objectMapper: ObjectMapper)
                        /**
                         * {@inheritDoc}
                         * The {@code ObjectMapper} parameter must be a {@link XmlMapper} instance.
                         */
                        // @ts-ignore
                        public setObjectMapper(objectMapper: ObjectMapper): void
                    }
                }
            }
        }
    }
}
