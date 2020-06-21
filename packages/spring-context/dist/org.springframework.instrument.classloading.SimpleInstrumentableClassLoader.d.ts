declare namespace org {
    namespace springframework {
        namespace instrument {
            namespace classloading {
                /**
                 * Simplistic implementation of an instrumentable {@code ClassLoader}.
                 * <p>Usable in tests and standalone environments.
                 * @author Rod Johnson
                 * @author Costin Leau
                 * @since 2.0
                 */
                // @ts-ignore
                class SimpleInstrumentableClassLoader extends OverridingClassLoader {
                    /**
                     * Create a new SimpleInstrumentableClassLoader for the given ClassLoader.
                     * @param parent the ClassLoader to build an instrumentable ClassLoader for
                     */
                    // @ts-ignore
                    constructor(parent: java.lang.ClassLoader)
                    /**
                     * Add a {@link ClassFileTransformer} to be applied by this ClassLoader.
                     * @param transformer the {#link ClassFileTransformer} to register
                     */
                    // @ts-ignore
                    public addTransformer(transformer: java.lang.instrument.ClassFileTransformer): void
                    // @ts-ignore
                    transformIfNecessary(name: java.lang.String | string, bytes: number /*byte*/[]): number /*byte*/[]
                }
            }
        }
    }
}
