declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace rmi {
                /**
                 * Special ObjectInputStream subclass that falls back to a specified codebase
                 * to load classes from if not found locally. In contrast to standard RMI
                 * conventions for dynamic class download, it is the client that determines
                 * the codebase URL here, rather than the "java.rmi.server.codebase" system
                 * property on the server.
                 * <p>Uses the JDK's RMIClassLoader to load classes from the specified codebase.
                 * The codebase can consist of multiple URLs, separated by spaces.
                 * Note that RMIClassLoader requires a SecurityManager to be set, like when
                 * using dynamic class download with standard RMI! (See the RMI documentation
                 * for details.)
                 * <p>Despite residing in the RMI package, this class is <i>not</i> used for
                 * RmiClientInterceptor, which uses the standard RMI infrastructure instead
                 * and thus is only able to rely on RMI's standard dynamic class download via
                 * "java.rmi.server.codebase". CodebaseAwareObjectInputStream is used by
                 * HttpInvokerClientInterceptor (see the "codebaseUrl" property there).
                 * <p>Thanks to Lionel Mestre for suggesting the option and providing
                 * a prototype!
                 * @author Juergen Hoeller
                 * @since 1.1.3
                 * @see java.rmi.server.RMIClassLoader
                 * @see RemoteInvocationSerializingExporter#createObjectInputStream
                 * @see org.springframework.remoting.httpinvoker.HttpInvokerClientInterceptor#setCodebaseUrl
                 */
                // @ts-ignore
                class CodebaseAwareObjectInputStream extends ConfigurableObjectInputStream {
                    /**
                     * Create a new CodebaseAwareObjectInputStream for the given InputStream and codebase.
                     * @param in the InputStream to read from
                     * @param codebaseUrl the codebase URL to load classes from if not found locally
                     *  (can consist of multiple URLs, separated by spaces)
                     * @see java.io.ObjectInputStream#ObjectInputStream(java.io.InputStream)
                     */
                    // @ts-ignore
                    constructor(input: java.io.InputStream, codebaseUrl: string)
                    /**
                     * Create a new CodebaseAwareObjectInputStream for the given InputStream and codebase.
                     * @param in the InputStream to read from
                     * @param classLoader the ClassLoader to use for loading local classes
                     *  (may be {#code null} to indicate RMI's default ClassLoader)
                     * @param codebaseUrl the codebase URL to load classes from if not found locally
                     *  (can consist of multiple URLs, separated by spaces)
                     * @see java.io.ObjectInputStream#ObjectInputStream(java.io.InputStream)
                     */
                    // @ts-ignore
                    constructor(input: java.io.InputStream, classLoader: java.lang.ClassLoader, codebaseUrl: string)
                    /**
                     * Create a new CodebaseAwareObjectInputStream for the given InputStream and codebase.
                     * @param in the InputStream to read from
                     * @param classLoader the ClassLoader to use for loading local classes
                     *  (may be {#code null} to indicate RMI's default ClassLoader)
                     * @param acceptProxyClasses whether to accept deserialization of proxy classes
                     *  (may be deactivated as a security measure)
                     * @see java.io.ObjectInputStream#ObjectInputStream(java.io.InputStream)
                     */
                    // @ts-ignore
                    constructor(input: java.io.InputStream, classLoader: java.lang.ClassLoader, acceptProxyClasses: boolean)
                    // @ts-ignore
                    resolveFallbackIfPossible(className: string, ex: java.lang.ClassNotFoundException): java.lang.Class<?>
                    // @ts-ignore
                    getFallbackClassLoader(): java.lang.ClassLoader
                }
            }
        }
    }
}
