declare namespace org {
    namespace springframework {
        namespace instrument {
            namespace classloading {
                /**
                 * {@link LoadTimeWeaver} which uses reflection to delegate to an underlying ClassLoader
                 * with well-known transformation hooks. The underlying ClassLoader is expected to
                 * support the following weaving methods (as defined in the {@link LoadTimeWeaver}
                 * interface):
                 * <ul>
                 * <li>{@code public void addTransformer(java.lang.instrument.ClassFileTransformer)}:
                 * for registering the given ClassFileTransformer on this ClassLoader
                 * <li>{@code public ClassLoader getThrowawayClassLoader()}:
                 * for obtaining a throwaway class loader for this ClassLoader (optional;
                 * ReflectiveLoadTimeWeaver will fall back to a SimpleThrowawayClassLoader if
                 * that method isn't available)
                 * </ul>
                 * <p>Please note that the above methods <i>must</i> reside in a class that is
                 * publicly accessible, although the class itself does not have to be visible
                 * to the application's class loader.
                 * <p>The reflective nature of this LoadTimeWeaver is particularly useful when the
                 * underlying ClassLoader implementation is loaded in a different class loader itself
                 * (such as the application server's class loader which is not visible to the
                 * web application). There is no direct API dependency between this LoadTimeWeaver
                 * adapter and the underlying ClassLoader, just a 'loose' method contract.
                 * <p>This is the LoadTimeWeaver to use e.g. with the Resin application server
                 * version 3.1+.
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @since 2.0
                 * @see #addTransformer(java.lang.instrument.ClassFileTransformer)
                 * @see #getThrowawayClassLoader()
                 * @see SimpleThrowawayClassLoader
                 */
                // @ts-ignore
                class ReflectiveLoadTimeWeaver extends java.lang.Object implements org.springframework.instrument.classloading.LoadTimeWeaver {
                    /**
                     * Create a new ReflectiveLoadTimeWeaver for the current context class
                     * loader, <i>which needs to support the required weaving methods</i>.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new SimpleLoadTimeWeaver for the given class loader.
                     * @param classLoader the {#code ClassLoader} to delegate to for
                     *  weaving (<i>must</i> support the required weaving methods).
                     * @throws IllegalStateException if the supplied {#code ClassLoader}
                     *  does not support the required weaving methods
                     */
                    // @ts-ignore
                    constructor(classLoader: java.lang.ClassLoader)
                    // @ts-ignore
                    addTransformer(transformer: java.lang.instrument.ClassFileTransformer): void
                    // @ts-ignore
                    getInstrumentableClassLoader(): java.lang.ClassLoader
                    // @ts-ignore
                    getThrowawayClassLoader(): java.lang.ClassLoader
                }
            }
        }
    }
}
