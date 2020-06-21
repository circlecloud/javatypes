declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * {@code ClassLoader} that does <i>not</i> always delegate to the parent loader
             * as normal class loaders do. This enables, for example, instrumentation to be
             * forced in the overriding ClassLoader, or a "throwaway" class loading behavior
             * where selected application classes are temporarily loaded in the overriding
             * {@code ClassLoader} for introspection purposes before eventually loading an
             * instrumented version of the class in the given parent {@code ClassLoader}.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @since 2.0.1
             */
            // @ts-ignore
            class OverridingClassLoader extends org.springframework.core.DecoratingClassLoader {
                /**
                 * Create a new OverridingClassLoader for the given ClassLoader.
                 * @param parent the ClassLoader to build an overriding ClassLoader for
                 */
                // @ts-ignore
                constructor(parent: java.lang.ClassLoader)
                /**
                 * Create a new OverridingClassLoader for the given ClassLoader.
                 * @param parent the ClassLoader to build an overriding ClassLoader for
                 * @param overrideDelegate the ClassLoader to delegate to for overriding
                 * @since 4.3
                 */
                // @ts-ignore
                constructor(parent: java.lang.ClassLoader, overrideDelegate: java.lang.ClassLoader)
                /**
                 * Packages that are excluded by default.
                 */
                // @ts-ignore
                public static readonly DEFAULT_EXCLUDED_PACKAGES: java.lang.String[] | string[]
                // @ts-ignore
                public loadClass(name: java.lang.String | string): java.lang.Class<any>
                // @ts-ignore
                loadClass(name: java.lang.String | string, resolve: boolean): java.lang.Class<any>
                /**
                 * Determine whether the specified class is eligible for overriding
                 * by this class loader.
                 * @param className the class name to check
                 * @return whether the specified class is eligible
                 * @see #isExcluded
                 */
                // @ts-ignore
                isEligibleForOverriding(className: java.lang.String | string): boolean
                /**
                 * Load the specified class for overriding purposes in this ClassLoader.
                 * <p>The default implementation delegates to {@link #findLoadedClass},
                 * {@link #loadBytesForClass} and {@link #defineClass}.
                 * @param name the name of the class
                 * @return the Class object, or {#code null} if no class defined for that name
                 * @throws ClassNotFoundException if the class for the given name couldn't be loaded
                 */
                // @ts-ignore
                loadClassForOverriding(name: java.lang.String | string): java.lang.Class<any>
                /**
                 * Load the defining bytes for the given class,
                 * to be turned into a Class object through a {@link #defineClass} call.
                 * <p>The default implementation delegates to {@link #openStreamForClass}
                 * and {@link #transformIfNecessary}.
                 * @param name the name of the class
                 * @return the byte content (with transformers already applied),
                 *  or {#code null} if no class defined for that name
                 * @throws ClassNotFoundException if the class for the given name couldn't be loaded
                 */
                // @ts-ignore
                loadBytesForClass(name: java.lang.String | string): number /*byte*/[]
                /**
                 * Open an InputStream for the specified class.
                 * <p>The default implementation loads a standard class file through
                 * the parent ClassLoader's {@code getResourceAsStream} method.
                 * @param name the name of the class
                 * @return the InputStream containing the byte code for the specified class
                 */
                // @ts-ignore
                openStreamForClass(name: java.lang.String | string): java.io.InputStream
                /**
                 * Transformation hook to be implemented by subclasses.
                 * <p>The default implementation simply returns the given bytes as-is.
                 * @param name the fully-qualified name of the class being transformed
                 * @param bytes the raw bytes of the class
                 * @return the transformed bytes (never {#code null};
                 *  same as the input bytes if the transformation produced no changes)
                 */
                // @ts-ignore
                transformIfNecessary(name: java.lang.String | string, bytes: number /*byte*/[]): number /*byte*/[]
            }
        }
    }
}
