declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace support {
                /**
                 * Abstract base class for remote service exporters that are based
                 * on deserialization of {@link RemoteInvocation} objects.
                 * <p>Provides a "remoteInvocationExecutor" property, with a
                 * {@link DefaultRemoteInvocationExecutor} as default strategy.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see RemoteInvocationExecutor
                 * @see DefaultRemoteInvocationExecutor
                 */
                // @ts-ignore
                abstract class RemoteInvocationBasedExporter extends org.springframework.remoting.support.RemoteExporter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the RemoteInvocationExecutor to use for this exporter.
                     * Default is a DefaultRemoteInvocationExecutor.
                     * <p>A custom invocation executor can extract further context information
                     * from the invocation, for example user credentials.
                     */
                    // @ts-ignore
                    public setRemoteInvocationExecutor(remoteInvocationExecutor: org.springframework.remoting.support.RemoteInvocationExecutor): void
                    /**
                     * Return the RemoteInvocationExecutor used by this exporter.
                     */
                    // @ts-ignore
                    public getRemoteInvocationExecutor(): org.springframework.remoting.support.RemoteInvocationExecutor
                    /**
                     * Apply the given remote invocation to the given target object.
                     * The default implementation delegates to the RemoteInvocationExecutor.
                     * <p>Can be overridden in subclasses for custom invocation behavior,
                     * possibly for applying additional invocation parameters from a
                     * custom RemoteInvocation subclass. Note that it is preferable to use
                     * a custom RemoteInvocationExecutor which is a reusable strategy.
                     * @param invocation the remote invocation
                     * @param targetObject the target object to apply the invocation to
                     * @return the invocation result
                     * @throws NoSuchMethodException if the method name could not be resolved
                     * @throws IllegalAccessException if the method could not be accessed
                     * @throws InvocationTargetException if the method invocation resulted in an exception
                     * @see RemoteInvocationExecutor#invoke
                     */
                    // @ts-ignore
                    invoke(invocation: org.springframework.remoting.support.RemoteInvocation, targetObject: java.lang.Object | any): any
                    /**
                     * Apply the given remote invocation to the given target object, wrapping
                     * the invocation result in a serializable RemoteInvocationResult object.
                     * The default implementation creates a plain RemoteInvocationResult.
                     * <p>Can be overridden in subclasses for custom invocation behavior,
                     * for example to return additional context information. Note that this
                     * is not covered by the RemoteInvocationExecutor strategy!
                     * @param invocation the remote invocation
                     * @param targetObject the target object to apply the invocation to
                     * @return the invocation result
                     * @see #invoke
                     */
                    // @ts-ignore
                    invokeAndCreateResult(invocation: org.springframework.remoting.support.RemoteInvocation, targetObject: java.lang.Object | any): org.springframework.remoting.support.RemoteInvocationResult
                }
            }
        }
    }
}
