declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Special ObjectInputStream subclass that resolves class names
             * against a specific ClassLoader. Serves as base class for
             * {@link org.springframework.remoting.rmi.CodebaseAwareObjectInputStream}.
             * @author Juergen Hoeller
             * @since 2.5.5
             */
            // @ts-ignore
            class ConfigurableObjectInputStream extends java.io.ObjectInputStream {
                /**
                 * Create a new ConfigurableObjectInputStream for the given InputStream and ClassLoader.
                 * @param in the InputStream to read from
                 * @param classLoader the ClassLoader to use for loading local classes
                 * @see java.io.ObjectInputStream#ObjectInputStream(java.io.InputStream)
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, classLoader: java.lang.ClassLoader)
                /**
                 * Create a new ConfigurableObjectInputStream for the given InputStream and ClassLoader.
                 * @param in the InputStream to read from
                 * @param classLoader the ClassLoader to use for loading local classes
                 * @param acceptProxyClasses whether to accept deserialization of proxy classes
                 *  (may be deactivated as a security measure)
                 * @see java.io.ObjectInputStream#ObjectInputStream(java.io.InputStream)
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, classLoader: java.lang.ClassLoader, acceptProxyClasses: boolean)
                // @ts-ignore
                resolveClass(classDesc: java.io.ObjectStreamClass): java.lang.Class<?>
                // @ts-ignore
                resolveProxyClass(interfaces: string[]): java.lang.Class<?>
                /**
                 * Resolve the given class name against a fallback class loader.
                 * <p>The default implementation simply rethrows the original exception,
                 * since there is no fallback available.
                 * @param className the class name to resolve
                 * @param ex the original exception thrown when attempting to load the class
                 * @return the newly resolved class (never {#code null})
                 */
                // @ts-ignore
                resolveFallbackIfPossible(className: string, ex: java.lang.ClassNotFoundException): java.lang.Class<?>
                /**
                 * Return the fallback ClassLoader to use when no ClassLoader was specified
                 * and ObjectInputStream's own default class loader failed.
                 * <p>The default implementation simply returns {@code null}, indicating
                 * that no specific fallback is available.
                 */
                // @ts-ignore
                getFallbackClassLoader(): java.lang.ClassLoader
            }
        }
    }
}
