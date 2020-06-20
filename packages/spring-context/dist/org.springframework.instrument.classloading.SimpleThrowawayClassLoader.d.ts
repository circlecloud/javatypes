declare namespace org {
    namespace springframework {
        namespace instrument {
            namespace classloading {
                /**
                 * ClassLoader that can be used to load classes without bringing them
                 * into the parent loader. Intended to support JPA "temp class loader"
                 * requirement, but not JPA-specific.
                 * @author Rod Johnson
                 * @since 2.0
                 */
                // @ts-ignore
                class SimpleThrowawayClassLoader extends OverridingClassLoader {
                    /**
                     * Create a new SimpleThrowawayClassLoader for the given ClassLoader.
                     * @param parent the ClassLoader to build a throwaway ClassLoader for
                     */
                    // @ts-ignore
                    constructor(parent: java.lang.ClassLoader)
                }
            }
        }
    }
}
