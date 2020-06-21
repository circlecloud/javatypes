declare namespace org {
    namespace springframework {
        namespace instrument {
            namespace classloading {
                /**
                 * ClassFileTransformer-based weaver, allowing for a list of transformers to be
                 * applied on a class byte array. Normally used inside class loaders.
                 * <p>Note: This class is deliberately implemented for minimal external dependencies,
                 * since it is included in weaver jars (to be deployed into application servers).
                 * @author Rod Johnson
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @since 2.0
                 */
                // @ts-ignore
                class WeavingTransformer extends java.lang.Object {
                    /**
                     * Create a new WeavingTransformer for the given class loader.
                     * @param classLoader the ClassLoader to build a transformer for
                     */
                    // @ts-ignore
                    constructor(classLoader: java.lang.ClassLoader)
                    /**
                     * Add a class file transformer to be applied by this weaver.
                     * @param transformer the class file transformer to register
                     */
                    // @ts-ignore
                    public addTransformer(transformer: java.lang.instrument.ClassFileTransformer): void
                    /**
                     * Apply transformation on a given class byte definition.
                     * The method will always return a non-null byte array (if no transformation has taken place
                     * the array content will be identical to the original one).
                     * @param className the full qualified name of the class in dot format (i.e. some.package.SomeClass)
                     * @param bytes class byte definition
                     * @return (possibly transformed) class byte definition
                     */
                    // @ts-ignore
                    public transformIfNecessary(className: java.lang.String | string, bytes: number /*byte*/[]): number /*byte*/[]
                    /**
                     * Apply transformation on a given class byte definition.
                     * The method will always return a non-null byte array (if no transformation has taken place
                     * the array content will be identical to the original one).
                     * @param className the full qualified name of the class in dot format (i.e. some.package.SomeClass)
                     * @param internalName class name internal name in / format (i.e. some/package/SomeClass)
                     * @param bytes class byte definition
                     * @param pd protection domain to be used (can be null)
                     * @return (possibly transformed) class byte definition
                     */
                    // @ts-ignore
                    public transformIfNecessary(className: java.lang.String | string, internalName: java.lang.String | string, bytes: number /*byte*/[], pd: java.security.ProtectionDomain): number /*byte*/[]
                }
            }
        }
    }
}
