declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Base class for decorating ClassLoaders such as {@link OverridingClassLoader}
             * and {@link org.springframework.instrument.classloading.ShadowingClassLoader},
             * providing common handling of excluded packages and classes.
             * @author Juergen Hoeller
             * @author Rod Johnson
             * @since 2.5.2
             */
            // @ts-ignore
            class DecoratingClassLoader extends java.lang.ClassLoader {
                /**
                 * Create a new DecoratingClassLoader with no parent ClassLoader.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new DecoratingClassLoader using the given parent ClassLoader
                 * for delegation.
                 */
                // @ts-ignore
                constructor(parent: java.lang.ClassLoader)
                /**
                 * Add a package name to exclude from decoration (e.g. overriding).
                 * <p>Any class whose fully-qualified name starts with the name registered
                 * here will be handled by the parent ClassLoader in the usual fashion.
                 * @param packageName the package name to exclude
                 */
                // @ts-ignore
                excludePackage(packageName: string): void
                /**
                 * Add a class name to exclude from decoration (e.g. overriding).
                 * <p>Any class name registered here will be handled by the parent
                 * ClassLoader in the usual fashion.
                 * @param className the class name to exclude
                 */
                // @ts-ignore
                excludeClass(className: string): void
                /**
                 * Determine whether the specified class is excluded from decoration
                 * by this class loader.
                 * <p>The default implementation checks against excluded packages and classes.
                 * @param className the class name to check
                 * @return whether the specified class is eligible
                 * @see #excludePackage
                 * @see #excludeClass
                 */
                // @ts-ignore
                isExcluded(className: string): boolean
            }
        }
    }
}
