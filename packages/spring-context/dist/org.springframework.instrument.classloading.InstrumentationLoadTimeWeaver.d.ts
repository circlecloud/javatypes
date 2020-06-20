declare namespace org {
    namespace springframework {
        namespace instrument {
            namespace classloading {
                /**
                 * {@link LoadTimeWeaver} relying on VM {@link Instrumentation}.
                 * <p>Start the JVM specifying the Java agent to be used &mdash; for example, as
                 * follows where <code>spring-instrument-{version}.jar</code> is a JAR file
                 * containing the {@link InstrumentationSavingAgent} class shipped with Spring
                 * and where <code>{version}</code> is the release version of the Spring
                 * Framework (e.g., {@code 5.1.5.RELEASE}).
                 * <p><code>-javaagent:path/to/spring-instrument-{version}.jar</code>
                 * <p>In Eclipse, for example, add something similar to the following to the
                 * JVM arguments for the Eclipse "Run configuration":
                 * <p><code>-javaagent:${project_loc}/lib/spring-instrument-{version}.jar</code>
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @since 2.0
                 * @see InstrumentationSavingAgent
                 */
                // @ts-ignore
                class InstrumentationLoadTimeWeaver extends java.lang.Object implements org.springframework.instrument.classloading.LoadTimeWeaver {
                    /**
                     * Create a new InstrumentationLoadTimeWeaver for the default ClassLoader.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new InstrumentationLoadTimeWeaver for the given ClassLoader.
                     * @param classLoader the ClassLoader that registered transformers are supposed to apply to
                     */
                    // @ts-ignore
                    constructor(classLoader: java.lang.ClassLoader)
                    // @ts-ignore
                    addTransformer(transformer: java.lang.instrument.ClassFileTransformer): void
                    /**
                     * We have the ability to weave the current class loader when starting the
                     * JVM in this way, so the instrumentable class loader will always be the
                     * current loader.
                     */
                    // @ts-ignore
                    getInstrumentableClassLoader(): java.lang.ClassLoader
                    /**
                     * This implementation always returns a {@link SimpleThrowawayClassLoader}.
                     */
                    // @ts-ignore
                    getThrowawayClassLoader(): java.lang.ClassLoader
                    /**
                     * Remove all registered transformers, in inverse order of registration.
                     */
                    // @ts-ignore
                    removeTransformers(): void
                    /**
                     * Check whether an Instrumentation instance is available for the current VM.
                     * @see #getInstrumentation()
                     */
                    // @ts-ignore
                    isInstrumentationAvailable(): boolean
                }
            }
        }
    }
}
