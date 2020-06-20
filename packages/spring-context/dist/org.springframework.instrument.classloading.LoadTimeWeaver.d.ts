declare namespace org {
    namespace springframework {
        namespace instrument {
            namespace classloading {
                /**
                 * Defines the contract for adding one or more
                 * {@link ClassFileTransformer ClassFileTransformers} to a {@link ClassLoader}.
                 * <p>Implementations may operate on the current context {@code ClassLoader}
                 * or expose their own instrumentable {@code ClassLoader}.
                 * @author Rod Johnson
                 * @author Costin Leau
                 * @since 2.0
                 * @see java.lang.instrument.ClassFileTransformer
                 */
                // @ts-ignore
                interface LoadTimeWeaver {
                    /**
                     * Add a {@code ClassFileTransformer} to be applied by this
                     * {@code LoadTimeWeaver}.
                     * @param transformer the {#code ClassFileTransformer} to add
                     */
                    // @ts-ignore
                    addTransformer(transformer: java.lang.instrument.ClassFileTransformer): void
                    /**
                     * Return a {@code ClassLoader} that supports instrumentation
                     * through AspectJ-style load-time weaving based on user-defined
                     * {@link ClassFileTransformer ClassFileTransformers}.
                     * <p>May be the current {@code ClassLoader}, or a {@code ClassLoader}
                     * created by this {@link LoadTimeWeaver} instance.
                     * @return the {#code ClassLoader} which will expose
                     *  instrumented classes according to the registered transformers
                     */
                    // @ts-ignore
                    getInstrumentableClassLoader(): java.lang.ClassLoader
                    /**
                     * Return a throwaway {@code ClassLoader}, enabling classes to be
                     * loaded and inspected without affecting the parent {@code ClassLoader}.
                     * <p>Should <i>not</i> return the same instance of the {@link ClassLoader}
                     * returned from an invocation of {@link #getInstrumentableClassLoader()}.
                     * @return a temporary throwaway {#code ClassLoader}; should return
                     *  a new instance for each call, with no existing state
                     */
                    // @ts-ignore
                    getThrowawayClassLoader(): java.lang.ClassLoader
                }
            }
        }
    }
}
