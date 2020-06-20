declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * Defines a common interface for configuring either client or server HTTP
                 * message readers and writers. This is used as follows:
                 * <ul>
                 * <li>Use {@link ClientCodecConfigurer#create()} or
                 * {@link ServerCodecConfigurer#create()} to create an instance.
                 * <li>Use {@link #defaultCodecs()} to customize HTTP message readers or writers
                 * registered by default.
                 * <li>Use {@link #customCodecs()} to add custom HTTP message readers or writers.
                 * <li>Use {@link #getReaders()} and {@link #getWriters()} to obtain the list of
                 * configured HTTP message readers and writers.
                 * </ul>
                 * <p>HTTP message readers and writers are divided into 3 categories that are
                 * ordered as follows:
                 * <ol>
                 * <li>Typed readers and writers that support specific types, e.g. byte[], String.
                 * <li>Object readers and writers, e.g. JSON, XML.
                 * <li>Catch-all readers or writers, e.g. String with any media type.
                 * </ol>
                 * <p>Typed and object readers are further sub-divided and ordered as follows:
                 * <ol>
                 * <li>Default HTTP reader and writer registrations.
                 * <li>Custom readers and writers.
                 * </ol>
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                interface CodecConfigurer {
                    /**
                     * Provides a way to customize or replace HTTP message readers and writers
                     * registered by default.
                     * @see #registerDefaults(boolean)
                     */
                    // @ts-ignore
                    defaultCodecs(): org.springframework.http.codec.CodecConfigurer.DefaultCodecs
                    /**
                     * Register custom HTTP message readers or writers in addition to the ones
                     * registered by default.
                     */
                    // @ts-ignore
                    customCodecs(): org.springframework.http.codec.CodecConfigurer.CustomCodecs
                    /**
                     * Provides a way to completely turn off registration of default HTTP message
                     * readers and writers, and instead rely only on the ones provided via
                     * {@link #customCodecs()}.
                     * <p>By default this is set to {@code "true"} in which case default
                     * registrations are made; setting this to {@code false} disables default
                     * registrations.
                     */
                    // @ts-ignore
                    registerDefaults(registerDefaults: boolean): void
                    /**
                     * Obtain the configured HTTP message readers.
                     */
                    // @ts-ignore
                    getReaders(): java.util.List<org.springframework.http.codec.HttpMessageReader<?>>
                    /**
                     * Obtain the configured HTTP message writers.
                     */
                    // @ts-ignore
                    getWriters(): java.util.List<org.springframework.http.codec.HttpMessageWriter<?>>
                    /**
                     * Create a copy of this {@link CodecConfigurer}. The returned clone has its
                     * own lists of default and custom codecs and generally can be configured
                     * independently. Keep in mind however that codec instances (if any are
                     * configured) are themselves not cloned.
                     * @since 5.1.12
                     */
                    // @ts-ignore
                    clone(): org.springframework.http.codec.CodecConfigurer
                }
            }
        }
    }
}
