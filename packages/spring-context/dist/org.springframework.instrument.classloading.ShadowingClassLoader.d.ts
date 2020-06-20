declare namespace org {
    namespace springframework {
        namespace instrument {
            namespace classloading {
                /**
                 * ClassLoader decorator that shadows an enclosing ClassLoader,
                 * applying registered transformers to all affected classes.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @author Costin Leau
                 * @since 2.0
                 * @see #addTransformer
                 * @see org.springframework.core.OverridingClassLoader
                 */
                // @ts-ignore
                class ShadowingClassLoader extends DecoratingClassLoader {
                    /**
                     * Create a new ShadowingClassLoader, decorating the given ClassLoader,
                     * applying {@link #DEFAULT_EXCLUDED_PACKAGES}.
                     * @param enclosingClassLoader the ClassLoader to decorate
                     * @see #ShadowingClassLoader(ClassLoader, boolean)
                     */
                    // @ts-ignore
                    constructor(enclosingClassLoader: java.lang.ClassLoader)
                    /**
                     * Create a new ShadowingClassLoader, decorating the given ClassLoader.
                     * @param enclosingClassLoader the ClassLoader to decorate
                     * @param defaultExcludes whether to apply {#link #DEFAULT_EXCLUDED_PACKAGES}
                     * @since 4.3.8
                     */
                    // @ts-ignore
                    constructor(enclosingClassLoader: java.lang.ClassLoader, defaultExcludes: boolean)
                    /**
                     * Packages that are excluded by default.
                     */
                    // @ts-ignore
                    readonly DEFAULT_EXCLUDED_PACKAGES: string[]
                    /**
                     * Add the given ClassFileTransformer to the list of transformers that this
                     * ClassLoader will apply.
                     * @param transformer the ClassFileTransformer
                     */
                    // @ts-ignore
                    addTransformer(transformer: java.lang.instrument.ClassFileTransformer): void
                    /**
                     * Copy all ClassFileTransformers from the given ClassLoader to the list of
                     * transformers that this ClassLoader will apply.
                     * @param other the ClassLoader to copy from
                     */
                    // @ts-ignore
                    copyTransformers(other: org.springframework.instrument.classloading.ShadowingClassLoader): void
                    // @ts-ignore
                    loadClass(name: string): java.lang.Class<?>
                    /**
                     * Determine whether the specified class is eligible for shadowing
                     * by this class loader.
                     * @param className the class name to check
                     * @return whether the specified class is eligible
                     * @see #isExcluded
                     */
                    // @ts-ignore
                    isEligibleForShadowing(className: string): boolean
                    // @ts-ignore
                    getResource(name: string): java.net.URL
                    // @ts-ignore
                    getResourceAsStream(name: string): java.io.InputStream
                    // @ts-ignore
                    getResources(name: string): java.util.Enumeration<java.net.URL>
                }
            }
        }
    }
}
