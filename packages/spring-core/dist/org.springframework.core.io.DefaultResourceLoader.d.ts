declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * Default implementation of the {@link ResourceLoader} interface.
                 * Used by {@link ResourceEditor}, and serves as base class for
                 * {@link org.springframework.context.support.AbstractApplicationContext}.
                 * Can also be used standalone.
                 * <p>Will return a {@link UrlResource} if the location value is a URL,
                 * and a {@link ClassPathResource} if it is a non-URL path or a
                 * "classpath:" pseudo-URL.
                 * @author Juergen Hoeller
                 * @since 10.03.2004
                 * @see FileSystemResourceLoader
                 * @see org.springframework.context.support.ClassPathXmlApplicationContext
                 */
                // @ts-ignore
                class DefaultResourceLoader extends java.lang.Object implements org.springframework.core.io.ResourceLoader {
                    /**
                     * Create a new DefaultResourceLoader.
                     * <p>ClassLoader access will happen using the thread context class loader
                     * at the time of this ResourceLoader's initialization.
                     * @see java.lang.Thread#getContextClassLoader()
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new DefaultResourceLoader.
                     * @param classLoader the ClassLoader to load class path resources with, or {#code null}
                     *  for using the thread context class loader at the time of actual resource access
                     */
                    // @ts-ignore
                    constructor(classLoader: java.lang.ClassLoader)
                    /**
                     * Specify the ClassLoader to load class path resources with, or {@code null}
                     * for using the thread context class loader at the time of actual resource access.
                     * <p>The default is that ClassLoader access will happen using the thread context
                     * class loader at the time of this ResourceLoader's initialization.
                     */
                    // @ts-ignore
                    public setClassLoader(classLoader: java.lang.ClassLoader): void
                    /**
                     * Return the ClassLoader to load class path resources with.
                     * <p>Will get passed to ClassPathResource's constructor for all
                     * ClassPathResource objects created by this resource loader.
                     * @see ClassPathResource
                     */
                    // @ts-ignore
                    public getClassLoader(): java.lang.ClassLoader
                    /**
                     * Register the given resolver with this resource loader, allowing for
                     * additional protocols to be handled.
                     * <p>Any such resolver will be invoked ahead of this loader's standard
                     * resolution rules. It may therefore also override any default rules.
                     * @since 4.3
                     * @see #getProtocolResolvers()
                     */
                    // @ts-ignore
                    public addProtocolResolver(resolver: org.springframework.core.io.ProtocolResolver): void
                    /**
                     * Return the collection of currently registered protocol resolvers,
                     * allowing for introspection as well as modification.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public getProtocolResolvers(): Array<org.springframework.core.io.ProtocolResolver>
                    /**
                     * Obtain a cache for the given value type, keyed by {@link Resource}.
                     * @param valueType the value type, e.g. an ASM {#code MetadataReader}
                     * @return the cache {#link Map}, shared at the {@code ResourceLoader} level
                     * @since 5.0
                     */
                    // @ts-ignore
                    public getResourceCache<T>(valueType: java.lang.Class<T>): java.util.Map<org.springframework.core.io.Resource, T>
                    /**
                     * Clear all resource caches in this resource loader.
                     * @since 5.0
                     * @see #getResourceCache
                     */
                    // @ts-ignore
                    public clearResourceCaches(): void
                    // @ts-ignore
                    public getResource(location: java.lang.String | string): org.springframework.core.io.Resource
                    /**
                     * Return a Resource handle for the resource at the given path.
                     * <p>The default implementation supports class path locations. This should
                     * be appropriate for standalone implementations but can be overridden,
                     * e.g. for implementations targeted at a Servlet container.
                     * @param path the path to the resource
                     * @return the corresponding Resource handle
                     * @see ClassPathResource
                     * @see org.springframework.context.support.FileSystemXmlApplicationContext#getResourceByPath
                     * @see org.springframework.web.context.support.XmlWebApplicationContext#getResourceByPath
                     */
                    // @ts-ignore
                    getResourceByPath(path: java.lang.String | string): org.springframework.core.io.Resource
                }
            }
        }
    }
}
