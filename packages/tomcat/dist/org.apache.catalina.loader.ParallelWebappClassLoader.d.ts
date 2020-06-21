declare namespace org {
    namespace apache {
        namespace catalina {
            namespace loader {
                // @ts-ignore
                class ParallelWebappClassLoader extends org.apache.catalina.loader.WebappClassLoaderBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(parent: java.lang.ClassLoader)
                    /**
                     * Returns a copy of this class loader without any class file
                     * transformers. This is a tool often used by Java Persistence API
                     * providers to inspect entity classes in the absence of any
                     * instrumentation, something that can't be guaranteed within the
                     * context of a {@link java.lang.instrument.ClassFileTransformer}'s
                     * {@link java.lang.instrument.ClassFileTransformer#transform(ClassLoader,
                     * String, Class, java.security.ProtectionDomain, byte[]) transform} method.
                     * <p>
                     * The returned class loader's resource cache will have been cleared
                     * so that classes already instrumented will not be retained or
                     * returned.
                     * @return the transformer-free copy of this class loader.
                     */
                    // @ts-ignore
                    public copyWithoutTransformers(): org.apache.catalina.loader.ParallelWebappClassLoader
                }
            }
        }
    }
}
