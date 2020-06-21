declare namespace org {
    namespace apache {
        namespace tomcat {
            /**
             * Specifies a class loader capable of being decorated with
             * {@link ClassFileTransformer}s. These transformers can instrument
             * (or weave) the byte code of classes loaded through this class loader
             * to alter their behavior. Currently only
             * {@link org.apache.catalina.loader.WebappClassLoaderBase} implements this
             * interface. This allows web application frameworks or JPA providers
             * bundled with a web application to instrument web application classes
             * as necessary.
             * <p>
             * You should always program against the methods of this interface
             * (whether using reflection or otherwise). The methods in
             * {@code WebappClassLoaderBase} are protected by the default security
             * manager if one is in use.
             * @since 8.0, 7.0.64
             */
            // @ts-ignore
            interface InstrumentableClassLoader {
                /**
                 * Adds the specified class file transformer to this class loader. The
                 * transformer will then be able to instrument the bytecode of any
                 * classes loaded by this class loader after the invocation of this
                 * method.
                 * @param transformer The transformer to add to the class loader
                 * @throws IllegalArgumentException if the {#literal transformer} is null.
                 */
                // @ts-ignore
                addTransformer(transformer: java.lang.instrument.ClassFileTransformer): void
                /**
                 * Removes the specified class file transformer from this class loader.
                 * It will no longer be able to instrument the byte code of any classes
                 * loaded by the class loader after the invocation of this method.
                 * However, any classes already instrumented by this transformer before
                 * this method call will remain in their instrumented state.
                 * @param transformer The transformer to remove
                 */
                // @ts-ignore
                removeTransformer(transformer: java.lang.instrument.ClassFileTransformer): void
                /**
                 * Returns a copy of this class loader without any class file
                 * transformers. This is a tool often used by Java Persistence API
                 * providers to inspect entity classes in the absence of any
                 * instrumentation, something that can't be guaranteed within the
                 * context of a {@link ClassFileTransformer}'s
                 * {@link ClassFileTransformer#transform(ClassLoader, String, Class,
                 * java.security.ProtectionDomain, byte[]) transform} method.
                 * <p>
                 * The returned class loader's resource cache will have been cleared
                 * so that classes already instrumented will not be retained or
                 * returned.
                 * @return the transformer-free copy of this class loader.
                 */
                // @ts-ignore
                copyWithoutTransformers(): java.lang.ClassLoader
            }
        }
    }
}
