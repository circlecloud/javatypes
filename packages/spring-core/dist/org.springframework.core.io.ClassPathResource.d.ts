declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * {@link Resource} implementation for class path resources. Uses either a
                 * given {@link ClassLoader} or a given {@link Class} for loading resources.
                 * <p>Supports resolution as {@code java.io.File} if the class path
                 * resource resides in the file system, but not for resources in a JAR.
                 * Always supports resolution as URL.
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 28.12.2003
                 * @see ClassLoader#getResourceAsStream(String)
                 * @see Class#getResourceAsStream(String)
                 */
                // @ts-ignore
                class ClassPathResource extends org.springframework.core.io.AbstractFileResolvingResource {
                    /**
                     * Create a new {@code ClassPathResource} for {@code ClassLoader} usage.
                     * A leading slash will be removed, as the ClassLoader resource access
                     * methods will not accept it.
                     * <p>The thread context class loader will be used for
                     * loading the resource.
                     * @param path the absolute path within the class path
                     * @see java.lang.ClassLoader#getResourceAsStream(String)
                     * @see org.springframework.util.ClassUtils#getDefaultClassLoader()
                     */
                    // @ts-ignore
                    constructor(path: java.lang.String | string)
                    /**
                     * Create a new {@code ClassPathResource} for {@code ClassLoader} usage.
                     * A leading slash will be removed, as the ClassLoader resource access
                     * methods will not accept it.
                     * @param path the absolute path within the classpath
                     * @param classLoader the class loader to load the resource with,
                     *  or {#code null} for the thread context class loader
                     * @see ClassLoader#getResourceAsStream(String)
                     */
                    // @ts-ignore
                    constructor(path: java.lang.String | string, classLoader: java.lang.ClassLoader)
                    /**
                     * Create a new {@code ClassPathResource} for {@code Class} usage.
                     * The path can be relative to the given class, or absolute within
                     * the classpath via a leading slash.
                     * @param path relative or absolute path within the class path
                     * @param clazz the class to load resources with
                     * @see java.lang.Class#getResourceAsStream
                     */
                    // @ts-ignore
                    constructor(path: java.lang.String | string, clazz: java.lang.Class<any>)
                    /**
                     * Create a new {@code ClassPathResource} with optional {@code ClassLoader}
                     * and {@code Class}. Only for internal usage.
                     * @param path relative or absolute path within the classpath
                     * @param classLoader the class loader to load the resource with, if any
                     * @param clazz the class to load resources with, if any
                     * @deprecated as of 4.3.13, in favor of selective use of
                     *  {#link #ClassPathResource(String, ClassLoader)} vs {@link #ClassPathResource(String, Class)}
                     */
                    // @ts-ignore
                    constructor(path: java.lang.String | string, classLoader: java.lang.ClassLoader, clazz: java.lang.Class<any>)
                    /**
                     * Return the path for this resource (as resource path within the class path).
                     */
                    // @ts-ignore
                    public getPath(): string
                    /**
                     * Return the ClassLoader that this resource will be obtained from.
                     */
                    // @ts-ignore
                    public getClassLoader(): java.lang.ClassLoader
                    /**
                     * This implementation checks for the resolution of a resource URL.
                     * @see java.lang.ClassLoader#getResource(String)
                     * @see java.lang.Class#getResource(String)
                     */
                    // @ts-ignore
                    public exists(): boolean
                    /**
                     * Resolves a URL for the underlying class path resource.
                     * @return the resolved URL, or {#code null} if not resolvable
                     */
                    // @ts-ignore
                    resolveURL(): java.net.URL
                    /**
                     * This implementation opens an InputStream for the given class path resource.
                     * @see java.lang.ClassLoader#getResourceAsStream(String)
                     * @see java.lang.Class#getResourceAsStream(String)
                     */
                    // @ts-ignore
                    public getInputStream(): java.io.InputStream
                    /**
                     * This implementation returns a URL for the underlying class path resource,
                     * if available.
                     * @see java.lang.ClassLoader#getResource(String)
                     * @see java.lang.Class#getResource(String)
                     */
                    // @ts-ignore
                    public getURL(): java.net.URL
                    /**
                     * This implementation creates a ClassPathResource, applying the given path
                     * relative to the path of the underlying resource of this descriptor.
                     * @see org.springframework.util.StringUtils#applyRelativePath(String, String)
                     */
                    // @ts-ignore
                    public createRelative(relativePath: java.lang.String | string): org.springframework.core.io.Resource
                    /**
                     * This implementation returns the name of the file that this class path
                     * resource refers to.
                     * @see org.springframework.util.StringUtils#getFilename(String)
                     */
                    // @ts-ignore
                    public getFilename(): string
                    /**
                     * This implementation returns a description that includes the class path location.
                     */
                    // @ts-ignore
                    public getDescription(): string
                    /**
                     * This implementation compares the underlying class path locations.
                     */
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    /**
                     * This implementation returns the hash code of the underlying
                     * class path location.
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                }
            }
        }
    }
}
