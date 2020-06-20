declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * Strategy interface for loading resources (e.. class path or file system
                 * resources). An {@link org.springframework.context.ApplicationContext}
                 * is required to provide this functionality, plus extended
                 * {@link org.springframework.core.io.support.ResourcePatternResolver} support.
                 * <p>{@link DefaultResourceLoader} is a standalone implementation that is
                 * usable outside an ApplicationContext, also used by {@link ResourceEditor}.
                 * <p>Bean properties of type Resource and Resource array can be populated
                 * from Strings when running in an ApplicationContext, using the particular
                 * context's resource loading strategy.
                 * @author Juergen Hoeller
                 * @since 10.03.2004
                 * @see Resource
                 * @see org.springframework.core.io.support.ResourcePatternResolver
                 * @see org.springframework.context.ApplicationContext
                 * @see org.springframework.context.ResourceLoaderAware
                 */
                // @ts-ignore
                interface ResourceLoader {
                    /**
                     * Pseudo URL prefix for loading from the class path: "classpath:".
                     */
                    // @ts-ignore
                    
                    /**
                     * Return a Resource handle for the specified resource location.
                     * <p>The handle should always be a reusable resource descriptor,
                     * allowing for multiple {@link Resource#getInputStream()} calls.
                     * <p><ul>
                     * <li>Must support fully qualified URLs, e.g. "file:C:/test.dat".
                     * <li>Must support classpath pseudo-URLs, e.g. "classpath:test.dat".
                     * <li>Should support relative file paths, e.g. "WEB-INF/test.dat".
                     * (This will be implementation-specific, typically provided by an
                     * ApplicationContext implementation.)
                     * </ul>
                     * <p>Note that a Resource handle does not imply an existing resource;
                     * you need to invoke {@link Resource#exists} to check for existence.
                     * @param location the resource location
                     * @return a corresponding Resource handle (never {#code null})
                     * @see #CLASSPATH_URL_PREFIX
                     * @see Resource#exists()
                     * @see Resource#getInputStream()
                     */
                    // @ts-ignore
                    getResource(location: string): org.springframework.core.io.Resource
                    /**
                     * Expose the ClassLoader used by this ResourceLoader.
                     * <p>Clients which need to access the ClassLoader directly can do so
                     * in a uniform manner with the ResourceLoader, rather than relying
                     * on the thread context ClassLoader.
                     * @return the ClassLoader
                     *  (only {#code null} if even the system ClassLoader isn't accessible)
                     * @see org.springframework.util.ClassUtils#getDefaultClassLoader()
                     * @see org.springframework.util.ClassUtils#forName(String, ClassLoader)
                     */
                    // @ts-ignore
                    getClassLoader(): java.lang.ClassLoader
                }
            }
        }
    }
}
