declare namespace org {
    namespace springframework {
        namespace instrument {
            namespace classloading {
                namespace glassfish {
                    /**
                     * {@link LoadTimeWeaver} implementation for GlassFish's
                     * {@code org.glassfish.api.deployment.InstrumentableClassLoader InstrumentableClassLoader}.
                     * <p>As of Spring Framework 5.0, this weaver supports GlassFish 4+.
                     * @author Costin Leau
                     * @author Juergen Hoeller
                     * @since 2.0.1
                     */
                    // @ts-ignore
                    class GlassFishLoadTimeWeaver extends java.lang.Object implements org.springframework.instrument.classloading.LoadTimeWeaver {
                        /**
                         * Create a new instance of the {@link GlassFishLoadTimeWeaver} class using
                         * the default {@link ClassLoader class loader}.
                         * @see org.springframework.util.ClassUtils#getDefaultClassLoader()
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new instance of the {@link GlassFishLoadTimeWeaver} class using
                         * the supplied {@link ClassLoader}.
                         * @param classLoader the {#code ClassLoader} to delegate to for weaving
                         */
                        // @ts-ignore
                        constructor(classLoader: java.lang.ClassLoader)
                        // @ts-ignore
                        public addTransformer(transformer: java.lang.instrument.ClassFileTransformer): void
                        // @ts-ignore
                        public getInstrumentableClassLoader(): java.lang.ClassLoader
                        // @ts-ignore
                        public getThrowawayClassLoader(): java.lang.ClassLoader
                    }
                }
            }
        }
    }
}
