declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace support {
                /**
                 * Abstract base class for remote service accessors that are based
                 * on serialization of {@link RemoteInvocation} objects.
                 * Provides a "remoteInvocationFactory" property, with a
                 * {@link DefaultRemoteInvocationFactory} as default strategy.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see #setRemoteInvocationFactory
                 * @see RemoteInvocation
                 * @see RemoteInvocationFactory
                 * @see DefaultRemoteInvocationFactory
                 */
                // @ts-ignore
                class RemoteInvocationBasedAccessor extends org.springframework.remoting.support.UrlBasedRemoteAccessor {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the RemoteInvocationFactory to use for this accessor.
                     * Default is a {@link DefaultRemoteInvocationFactory}.
                     * <p>A custom invocation factory can add further context information
                     * to the invocation, for example user credentials.
                     */
                    // @ts-ignore
                    setRemoteInvocationFactory(remoteInvocationFactory: org.springframework.remoting.support.RemoteInvocationFactory): void
                    /**
                     * Return the RemoteInvocationFactory used by this accessor.
                     */
                    // @ts-ignore
                    getRemoteInvocationFactory(): org.springframework.remoting.support.RemoteInvocationFactory
                    /**
                     * Create a new RemoteInvocation object for the given AOP method invocation.
                     * <p>The default implementation delegates to the configured
                     * {@link #setRemoteInvocationFactory RemoteInvocationFactory}.
                     * This can be overridden in subclasses in order to provide custom RemoteInvocation
                     * subclasses, containing additional invocation parameters (e.g. user credentials).
                     * <p>Note that it is preferable to build a custom RemoteInvocationFactory
                     * as a reusable strategy, instead of overriding this method.
                     * @param methodInvocation the current AOP method invocation
                     * @return the RemoteInvocation object
                     * @see RemoteInvocationFactory#createRemoteInvocation
                     */
                    // @ts-ignore
                    createRemoteInvocation(methodInvocation: MethodInvocation): org.springframework.remoting.support.RemoteInvocation
                    /**
                     * Recreate the invocation result contained in the given RemoteInvocationResult object.
                     * <p>The default implementation calls the default {@code recreate()} method.
                     * This can be overridden in subclass to provide custom recreation, potentially
                     * processing the returned result object.
                     * @param result the RemoteInvocationResult to recreate
                     * @return a return value if the invocation result is a successful return
                     * @throws Throwable if the invocation result is an exception
                     * @see RemoteInvocationResult#recreate()
                     */
                    // @ts-ignore
                    recreateRemoteInvocationResult(result: org.springframework.remoting.support.RemoteInvocationResult): java.lang.Object
                }
            }
        }
    }
}
