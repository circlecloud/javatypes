declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace json {
                    /**
                     * Implementation of {@link org.springframework.http.converter.HttpMessageConverter}
                     * that can read and write JSON using the
                     * <a href="https://code.google.com/p/google-gson/">Google Gson</a> library.
                     * <p>This converter can be used to bind to typed beans or untyped {@code HashMap}s.
                     * By default, it supports {@code application/json} and {@code application/*+json} with
                     * {@code UTF-8} character set.
                     * <p>Tested against Gson 2.8; compatible with Gson 2.0 and higher.
                     * @author Roy Clarkson
                     * @author Juergen Hoeller
                     * @since 4.1
                     * @see com.google.gson.Gson
                     * @see com.google.gson.GsonBuilder
                     * @see #setGson
                     */
                    // @ts-ignore
                    class GsonHttpMessageConverter extends org.springframework.http.converter.json.AbstractJsonHttpMessageConverter {
                        /**
                         * Construct a new {@code GsonHttpMessageConverter} with default configuration.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a new {@code GsonHttpMessageConverter} with the given delegate.
                         * @param gson the Gson instance to use
                         * @since 5.0
                         */
                        // @ts-ignore
                        constructor(gson: Gson)
                        /**
                         * Set the {@code Gson} instance to use.
                         * If not set, a default {@link Gson#Gson() Gson} instance will be used.
                         * <p>Setting a custom-configured {@code Gson} is one way to take further
                         * control of the JSON serialization process.
                         * @see #GsonHttpMessageConverter(Gson)
                         */
                        // @ts-ignore
                        public setGson(gson: Gson): void
                        /**
                         * Return the configured {@code Gson} instance for this converter.
                         */
                        // @ts-ignore
                        public getGson(): Gson
                        // @ts-ignore
                        readInternal(resolvedType: java.lang.reflect.Type, reader: java.io.Reader): any
                        // @ts-ignore
                        writeInternal(o: java.lang.Object | any, type: java.lang.reflect.Type, writer: java.io.Writer): void
                    }
                }
            }
        }
    }
}
