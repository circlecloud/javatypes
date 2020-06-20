declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace feed {
                    /**
                     * Abstract base class for Atom and RSS Feed message converters, using the
                     * <a href="https://github.com/rometools/rome">ROME tools</a> project.
                     * <p><b>NOTE: As of Spring 4.1, this is based on the {@code com.rometools}
                     * variant of ROME, version 1.5. Please upgrade your build dependency.</b>
                     * @author Arjen Poutsma
                     * @since 3.0.2
                     * @param <T> the converted object type
                     * @see AtomFeedHttpMessageConverter
                     * @see RssChannelHttpMessageConverter
                     */
                    // @ts-ignore
                    class AbstractWireFeedHttpMessageConverter<T extends WireFeed> extends org.springframework.http.converter.AbstractHttpMessageConverter<T> {
                        // @ts-ignore
                        constructor(supportedMediaType: org.springframework.http.MediaType)
                        /**
                         * The default charset used by the converter.
                         */
                        // @ts-ignore
                        readonly DEFAULT_CHARSET: java.nio.charset.Charset
                        // @ts-ignore
                        readInternal(clazz: java.lang.Class<T>, inputMessage: org.springframework.http.HttpInputMessage): T
                        // @ts-ignore
                        writeInternal(wireFeed: T extends WireFeed, outputMessage: org.springframework.http.HttpOutputMessage): void
                    }
                }
            }
        }
    }
}
