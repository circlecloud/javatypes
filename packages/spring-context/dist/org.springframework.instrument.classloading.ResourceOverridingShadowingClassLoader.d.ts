declare namespace org {
    namespace springframework {
        namespace instrument {
            namespace classloading {
                /**
                 * Subclass of ShadowingClassLoader that overrides attempts to
                 * locate certain files.
                 * @author Rod Johnson
                 * @author Adrian Colyer
                 * @since 2.0
                 */
                // @ts-ignore
                class ResourceOverridingShadowingClassLoader extends org.springframework.instrument.classloading.ShadowingClassLoader {
                    /**
                     * Create a new ResourceOverridingShadowingClassLoader,
                     * decorating the given ClassLoader.
                     * @param enclosingClassLoader the ClassLoader to decorate
                     */
                    // @ts-ignore
                    constructor(enclosingClassLoader: java.lang.ClassLoader)
                    /**
                     * Return the resource (if any) at the new path
                     * on an attempt to locate a resource at the old path.
                     * @param oldPath the path requested
                     * @param newPath the actual path to be looked up
                     */
                    // @ts-ignore
                    public override(oldPath: java.lang.String | string, newPath: java.lang.String | string): void
                    /**
                     * Ensure that a resource with the given path is not found.
                     * @param oldPath the path of the resource to hide even if
                     *  it exists in the parent ClassLoader
                     */
                    // @ts-ignore
                    public suppress(oldPath: java.lang.String | string): void
                    /**
                     * Copy all overrides from the given ClassLoader.
                     * @param other the other ClassLoader to copy from
                     */
                    // @ts-ignore
                    public copyOverrides(other: org.springframework.instrument.classloading.ResourceOverridingShadowingClassLoader): void
                    // @ts-ignore
                    public getResource(requestedPath: java.lang.String | string): java.net.URL
                    // @ts-ignore
                    public getResourceAsStream(requestedPath: java.lang.String | string): java.io.InputStream
                    // @ts-ignore
                    public getResources(requestedPath: java.lang.String | string): java.util.Enumeration<java.net.URL>
                }
            }
        }
    }
}
