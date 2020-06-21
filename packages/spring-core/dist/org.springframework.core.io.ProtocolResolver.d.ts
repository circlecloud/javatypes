declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * A resolution strategy for protocol-specific resource handles.
                 * <p>Used as an SPI for {@link DefaultResourceLoader}, allowing for
                 * custom protocols to be handled without subclassing the loader
                 * implementation (or application context implementation).
                 * @author Juergen Hoeller
                 * @since 4.3
                 * @see DefaultResourceLoader#addProtocolResolver
                 */
                // @ts-ignore
                interface ProtocolResolver {
                    /**
                     * Resolve the given location against the given resource loader
                     * if this implementation's protocol matches.
                     * @param location the user-specified resource location
                     * @param resourceLoader the associated resource loader
                     * @return a corresponding {#code Resource} handle if the given location
                     *  matches this resolver's protocol, or {@code null} otherwise
                     */
                    // @ts-ignore
                    resolve(location: java.lang.String | string, resourceLoader: org.springframework.core.io.ResourceLoader): org.springframework.core.io.Resource
                }
            }
        }
    }
}
