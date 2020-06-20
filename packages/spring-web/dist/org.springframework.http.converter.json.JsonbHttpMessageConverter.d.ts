declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace json {
                    /**
                     * Implementation of {@link org.springframework.http.converter.HttpMessageConverter}
                     * that can read and write JSON using the
                     * <a href="http://json-b.net/">JSON Binding API</a>.
                     * <p>This converter can be used to bind to typed beans or untyped {@code HashMap}s.
                     * By default, it supports {@code application/json} and {@code application/*+json} with
                     * {@code UTF-8} character set.
                     * @author Juergen Hoeller
                     * @since 5.0
                     * @see javax.json.bind.Jsonb
                     * @see javax.json.bind.JsonbBuilder
                     * @see #setJsonb
                     */
                    // @ts-ignore
                    class JsonbHttpMessageConverter extends org.springframework.http.converter.json.AbstractJsonHttpMessageConverter {
                        /**
                         * Construct a new {@code JsonbHttpMessageConverter} with default configuration.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a new {@code JsonbHttpMessageConverter} with the given configuration.
                         * @param config the {#code JsonbConfig} for the underlying delegate
                         */
                        // @ts-ignore
                        constructor(config: JsonbConfig)
                        /**
                         * Construct a new {@code JsonbHttpMessageConverter} with the given delegate.
                         * @param jsonb the Jsonb instance to use
                         */
                        // @ts-ignore
                        constructor(jsonb: Jsonb)
                        /**
                         * Set the {@code Jsonb} instance to use.
                         * If not set, a default {@code Jsonb} instance will be created.
                         * <p>Setting a custom-configured {@code Jsonb} is one way to take further
                         * control of the JSON serialization process.
                         * @see #JsonbHttpMessageConverter(Jsonb)
                         * @see #JsonbHttpMessageConverter(JsonbConfig)
                         * @see JsonbBuilder
                         */
                        // @ts-ignore
                        setJsonb(jsonb: Jsonb): void
                        /**
                         * Return the configured {@code Jsonb} instance for this converter.
                         */
                        // @ts-ignore
                        getJsonb(): Jsonb
                        // @ts-ignore
                        readInternal(resolvedType: java.lang.reflect.Type, reader: java.io.Reader): java.lang.Object
                        // @ts-ignore
                        writeInternal(o: any, type: java.lang.reflect.Type, writer: java.io.Writer): void
                    }
                }
            }
        }
    }
}
