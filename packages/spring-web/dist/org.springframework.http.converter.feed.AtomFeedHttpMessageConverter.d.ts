declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace feed {
                    /**
                     * Implementation of {@link org.springframework.http.converter.HttpMessageConverter}
                     * that can read and write Atom feeds. Specifically, this converter can handle {@link Feed}
                     * objects from the <a href="https://github.com/rometools/rome">ROME</a> project.
                     * <p>><b>NOTE: As of Spring 4.1, this is based on the {@code com.rometools}
                     * variant of ROME, version 1.5. Please upgrade your build dependency.</b>
                     * <p>By default, this converter reads and writes the media type ({@code application/atom+xml}).
                     * This can be overridden through the {@link #setSupportedMediaTypes supportedMediaTypes} property.
                     * @author Arjen Poutsma
                     * @since 3.0.2
                     * @see Feed
                     */
                    // @ts-ignore
                    class AtomFeedHttpMessageConverter extends org.springframework.http.converter.feed.AbstractWireFeedHttpMessageConverter<Feed> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        supports(clazz: java.lang.Class<any>): boolean
                    }
                }
            }
        }
    }
}
