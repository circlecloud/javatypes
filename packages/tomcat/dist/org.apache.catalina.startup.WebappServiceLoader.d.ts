declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * A variation of Java's JAR ServiceLoader that respects exclusion rules for
                 * web applications.
                 * <p>
                 * Primarily intended for use loading ServletContainerInitializers as defined
                 * by Servlet 8.2.4. This implementation does not attempt lazy loading as the
                 * container is required to introspect all implementations discovered.
                 * <p>
                 * If the ServletContext defines ORDERED_LIBS, then only JARs in WEB-INF/lib
                 * that are named in that set will be included in the search for
                 * provider configuration files; if ORDERED_LIBS is not defined then
                 * all JARs will be searched for provider configuration files. Providers
                 * defined by resources in the parent ClassLoader will always be returned.
                 * <p>
                 * Provider classes will be loaded using the context's ClassLoader.
                 * @param <T> The type of service to load
                 * @see javax.servlet.ServletContainerInitializer
                 * @see java.util.ServiceLoader
                 */
                // @ts-ignore
                class WebappServiceLoader<T> extends java.lang.Object {
                    /**
                     * Construct a loader to load services from a ServletContext.
                     * @param context the context to use
                     */
                    // @ts-ignore
                    constructor(context: org.apache.catalina.Context)
                    /**
                     * Load the providers for a service type.
                     * @param serviceType the type of service to load
                     * @return an unmodifiable collection of service providers
                     * @throws IOException if there was a problem loading any service
                     */
                    // @ts-ignore
                    public load(serviceType: java.lang.Class<T>): Array<T>
                }
            }
        }
    }
}
