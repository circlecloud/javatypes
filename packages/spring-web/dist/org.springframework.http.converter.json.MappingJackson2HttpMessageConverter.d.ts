declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace json {
                    /**
                     * Implementation of {@link org.springframework.http.converter.HttpMessageConverter} that can read and
                     * write JSON using <a href="https://github.com/FasterXML/jackson">Jackson 2.x's</a> {@link ObjectMapper}.
                     * <p>This converter can be used to bind to typed beans, or untyped {@code HashMap} instances.
                     * <p>By default, this converter supports {@code application/json} and {@code application/*+json}
                     * with {@code UTF-8} character set. This can be overridden by setting the
                     * {@link #setSupportedMediaTypes supportedMediaTypes} property.
                     * <p>The default constructor uses the default configuration provided by {@link Jackson2ObjectMapperBuilder}.
                     * <p>Compatible with Jackson 2.9 and higher, as of Spring 5.0.
                     * @author Arjen Poutsma
                     * @author Keith Donald
                     * @author Rossen Stoyanchev
                     * @author Juergen Hoeller
                     * @author Sebastien Deleuze
                     * @since 3.1.2
                     */
                    // @ts-ignore
                    class MappingJackson2HttpMessageConverter extends org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter {
                        /**
                         * Construct a new {@link MappingJackson2HttpMessageConverter} using default configuration
                         * provided by {@link Jackson2ObjectMapperBuilder}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a new {@link MappingJackson2HttpMessageConverter} with a custom {@link ObjectMapper}.
                         * You can use {@link Jackson2ObjectMapperBuilder} to build it easily.
                         * @see Jackson2ObjectMapperBuilder#json()
                         */
                        // @ts-ignore
                        constructor(objectMapper: ObjectMapper)
                        /**
                         * Specify a custom prefix to use for this view's JSON output.
                         * Default is none.
                         * @see #setPrefixJson
                         */
                        // @ts-ignore
                        setJsonPrefix(jsonPrefix: string): void
                        /**
                         * Indicate whether the JSON output by this view should be prefixed with ")]}', ". Default is false.
                         * <p>Prefixing the JSON string in this manner is used to help prevent JSON Hijacking.
                         * The prefix renders the string syntactically invalid as a script so that it cannot be hijacked.
                         * This prefix should be stripped before parsing the string as JSON.
                         * @see #setJsonPrefix
                         */
                        // @ts-ignore
                        setPrefixJson(prefixJson: boolean): void
                        // @ts-ignore
                        writePrefix(generator: JsonGenerator, object: any): void
                    }
                }
            }
        }
    }
}
