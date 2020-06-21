declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace support {
                /**
                 * Generic support base class for remote accessor and exporters,
                 * providing common bean ClassLoader handling.
                 * @author Juergen Hoeller
                 * @since 2.5.2
                 */
                // @ts-ignore
                abstract class RemotingSupport extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Logger available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    // @ts-ignore
                    public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    /**
                     * Return the ClassLoader that this accessor operates in,
                     * to be used for deserializing and for generating proxies.
                     */
                    // @ts-ignore
                    getBeanClassLoader(): java.lang.ClassLoader
                    /**
                     * Override the thread context ClassLoader with the environment's bean ClassLoader
                     * if necessary, i.e. if the bean ClassLoader is not equivalent to the thread
                     * context ClassLoader already.
                     * @return the original thread context ClassLoader, or {#code null} if not overridden
                     */
                    // @ts-ignore
                    overrideThreadContextClassLoader(): java.lang.ClassLoader
                    /**
                     * Reset the original thread context ClassLoader if necessary.
                     * @param original the original thread context ClassLoader,
                     *  or {#code null} if not overridden (and hence nothing to reset)
                     */
                    // @ts-ignore
                    resetThreadContextClassLoader(original: java.lang.ClassLoader): void
                }
            }
        }
    }
}
