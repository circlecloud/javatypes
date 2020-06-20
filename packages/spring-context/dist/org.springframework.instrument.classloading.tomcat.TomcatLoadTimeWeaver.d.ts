declare namespace org {
    namespace springframework {
        namespace instrument {
            namespace classloading {
                namespace tomcat {
                    /**
                     * {@link org.springframework.instrument.classloading.LoadTimeWeaver} implementation
                     * for Tomcat's new {@code org.apache.tomcat.InstrumentableClassLoader}.
                     * Also capable of handling Spring's TomcatInstrumentableClassLoader when encountered.
                     * @author Juergen Hoeller
                     * @since 4.0
                     */
                    // @ts-ignore
                    class TomcatLoadTimeWeaver extends java.lang.Object implements org.springframework.instrument.classloading.LoadTimeWeaver {
                        /**
                         * Create a new instance of the {@link TomcatLoadTimeWeaver} class using
                         * the default {@link ClassLoader class loader}.
                         * @see org.springframework.util.ClassUtils#getDefaultClassLoader()
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new instance of the {@link TomcatLoadTimeWeaver} class using
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
