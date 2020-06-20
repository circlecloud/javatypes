declare namespace org {
    namespace springframework {
        namespace instrument {
            namespace classloading {
                namespace websphere {
                    /**
                     * {@link LoadTimeWeaver} implementation for WebSphere's instrumentable ClassLoader.
                     * Compatible with WebSphere 7 as well as 8 and 9.
                     * @author Costin Leau
                     * @since 3.1
                     */
                    // @ts-ignore
                    class WebSphereLoadTimeWeaver extends java.lang.Object implements org.springframework.instrument.classloading.LoadTimeWeaver {
                        /**
                         * Create a new instance of the {@link WebSphereLoadTimeWeaver} class using
                         * the default {@link ClassLoader class loader}.
                         * @see org.springframework.util.ClassUtils#getDefaultClassLoader()
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new instance of the {@link WebSphereLoadTimeWeaver} class using
                         * the supplied {@link ClassLoader}.
                         * @param classLoader the {#code ClassLoader} to delegate to for weaving
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
}
