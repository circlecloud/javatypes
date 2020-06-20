declare namespace org {
    namespace springframework {
        namespace instrument {
            namespace classloading {
                namespace jboss {
                    /**
                     * {@link LoadTimeWeaver} implementation for JBoss's instrumentable ClassLoader.
                     * Thanks to Ales Justin and Marius Bogoevici for the initial prototype.
                     * <p>As of Spring Framework 5.0, this weaver supports WildFly 8+.
                     * As of Spring Framework 5.1.5, it also supports WildFly 13+.
                     * @author Costin Leau
                     * @author Juergen Hoeller
                     * @since 3.0
                     */
                    // @ts-ignore
                    class JBossLoadTimeWeaver extends java.lang.Object implements org.springframework.instrument.classloading.LoadTimeWeaver {
                        /**
                         * Create a new instance of the {@link JBossLoadTimeWeaver} class using
                         * the default {@link ClassLoader class loader}.
                         * @see org.springframework.util.ClassUtils#getDefaultClassLoader()
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new instance of the {@link JBossLoadTimeWeaver} class using
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
