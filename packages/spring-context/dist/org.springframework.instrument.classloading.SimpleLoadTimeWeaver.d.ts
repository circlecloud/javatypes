declare namespace org {
    namespace springframework {
        namespace instrument {
            namespace classloading {
                /**
                 * {@code LoadTimeWeaver} that builds and exposes a
                 * {@link SimpleInstrumentableClassLoader}.
                 * <p>Mainly intended for testing environments, where it is sufficient to
                 * perform all class transformation on a newly created
                 * {@code ClassLoader} instance.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @since 2.0
                 * @see #getInstrumentableClassLoader()
                 * @see SimpleInstrumentableClassLoader
                 * @see ReflectiveLoadTimeWeaver
                 */
                // @ts-ignore
                class SimpleLoadTimeWeaver extends java.lang.Object implements org.springframework.instrument.classloading.LoadTimeWeaver {
                    /**
                     * Create a new {@code SimpleLoadTimeWeaver} for the current context
                     * {@code ClassLoader}.
                     * @see SimpleInstrumentableClassLoader
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new {@code SimpleLoadTimeWeaver} for the given
                     * {@code ClassLoader}.
                     * @param classLoader the {#code ClassLoader} to build a simple
                     *  instrumentable {@code ClassLoader} on top of
                     */
                    // @ts-ignore
                    constructor(classLoader: org.springframework.instrument.classloading.SimpleInstrumentableClassLoader)
                    // @ts-ignore
                    addTransformer(transformer: java.lang.instrument.ClassFileTransformer): void
                    // @ts-ignore
                    getInstrumentableClassLoader(): java.lang.ClassLoader
                    /**
                     * This implementation builds a {@link SimpleThrowawayClassLoader}.
                     */
                    // @ts-ignore
                    getThrowawayClassLoader(): java.lang.ClassLoader
                }
            }
        }
    }
}
