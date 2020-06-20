declare namespace org {
    namespace springframework {
        namespace instrument {
            namespace classloading {
                namespace weblogic {
                    /**
                     * {@link LoadTimeWeaver} implementation for WebLogic's instrumentable
                     * ClassLoader.
                     * <p><b>NOTE:</b> Requires BEA WebLogic version 10 or higher.
                     * @author Costin Leau
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class WebLogicLoadTimeWeaver extends java.lang.Object implements org.springframework.instrument.classloading.LoadTimeWeaver {
                        /**
                         * Creates a new instance of the {@link WebLogicLoadTimeWeaver} class using
                         * the default {@link ClassLoader class loader}.
                         * @see org.springframework.util.ClassUtils#getDefaultClassLoader()
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a new instance of the {@link WebLogicLoadTimeWeaver} class using
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
