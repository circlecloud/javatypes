declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace httpinvoker {
                /**
                 * {@link org.aopalliance.intercept.MethodInterceptor} for accessing an
                 * HTTP invoker service. The service URL must be an HTTP URL exposing
                 * an HTTP invoker service.
                 * <p>Serializes remote invocation objects and deserializes remote invocation
                 * result objects. Uses Java serialization just like RMI, but provides the
                 * same ease of setup as Caucho's HTTP-based Hessian protocol.
                 * <P>HTTP invoker is a very extensible and customizable protocol.
                 * It supports the RemoteInvocationFactory mechanism, like RMI invoker,
                 * allowing to include additional invocation attributes (for example,
                 * a security context). Furthermore, it allows to customize request
                 * execution via the {@link HttpInvokerRequestExecutor} strategy.
                 * <p>Can use the JDK's {@link java.rmi.server.RMIClassLoader} to load classes
                 * from a given {@link #setCodebaseUrl codebase}, performing on-demand dynamic
                 * code download from a remote location. The codebase can consist of multiple
                 * URLs, separated by spaces. Note that RMIClassLoader requires a SecurityManager
                 * to be set, analogous to when using dynamic class download with standard RMI!
                 * (See the RMI documentation for details.)
                 * <p><b>WARNING: Be aware of vulnerabilities due to unsafe Java deserialization:
                 * Manipulated input streams could lead to unwanted code execution on the server
                 * during the deserialization step. As a consequence, do not expose HTTP invoker
                 * endpoints to untrusted clients but rather just between your own services.</b>
                 * In general, we strongly recommend any other message format (e.g. JSON) instead.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see #setServiceUrl
                 * @see #setCodebaseUrl
                 * @see #setRemoteInvocationFactory
                 * @see #setHttpInvokerRequestExecutor
                 * @see HttpInvokerServiceExporter
                 * @see HttpInvokerProxyFactoryBean
                 * @see java.rmi.server.RMIClassLoader
                 */
                // @ts-ignore
                class HttpInvokerClientInterceptor extends RemoteInvocationBasedAccessor implements org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the codebase URL to download classes from if not found locally.
                     * Can consists of multiple URLs, separated by spaces.
                     * <p>Follows RMI's codebase conventions for dynamic class download.
                     * In contrast to RMI, where the server determines the URL for class download
                     * (via the "java.rmi.server.codebase" system property), it's the client
                     * that determines the codebase URL here. The server will usually be the
                     * same as for the service URL, just pointing to a different path there.
                     * @see #setServiceUrl
                     * @see org.springframework.remoting.rmi.CodebaseAwareObjectInputStream
                     * @see java.rmi.server.RMIClassLoader
                     */
                    // @ts-ignore
                    public setCodebaseUrl(codebaseUrl: java.lang.String | string): void
                    /**
                     * Return the codebase URL to download classes from if not found locally.
                     */
                    // @ts-ignore
                    public getCodebaseUrl(): string
                    /**
                     * Set the HttpInvokerRequestExecutor implementation to use for executing
                     * remote invocations.
                     * <p>Default is {@link SimpleHttpInvokerRequestExecutor}. Alternatively,
                     * consider using {@link HttpComponentsHttpInvokerRequestExecutor} for more
                     * sophisticated needs.
                     * @see SimpleHttpInvokerRequestExecutor
                     * @see HttpComponentsHttpInvokerRequestExecutor
                     */
                    // @ts-ignore
                    public setHttpInvokerRequestExecutor(httpInvokerRequestExecutor: org.springframework.remoting.httpinvoker.HttpInvokerRequestExecutor): void
                    /**
                     * Return the HttpInvokerRequestExecutor used by this remote accessor.
                     * <p>Creates a default SimpleHttpInvokerRequestExecutor if no executor
                     * has been initialized already.
                     */
                    // @ts-ignore
                    public getHttpInvokerRequestExecutor(): org.springframework.remoting.httpinvoker.HttpInvokerRequestExecutor
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public invoke(methodInvocation: MethodInvocation): any
                    /**
                     * Execute the given remote invocation via the {@link HttpInvokerRequestExecutor}.
                     * <p>This implementation delegates to {@link #executeRequest(RemoteInvocation)}.
                     * Can be overridden to react to the specific original MethodInvocation.
                     * @param invocation the RemoteInvocation to execute
                     * @param originalInvocation the original MethodInvocation (can e.g. be cast
                     *  to the ProxyMethodInvocation interface for accessing user attributes)
                     * @return the RemoteInvocationResult object
                     * @throws Exception in case of errors
                     */
                    // @ts-ignore
                    executeRequest(invocation: RemoteInvocation, originalInvocation: MethodInvocation): RemoteInvocationResult
                    /**
                     * Execute the given remote invocation via the {@link HttpInvokerRequestExecutor}.
                     * <p>Can be overridden in subclasses to pass a different configuration object
                     * to the executor. Alternatively, add further configuration properties in a
                     * subclass of this accessor: By default, the accessor passed itself as
                     * configuration object to the executor.
                     * @param invocation the RemoteInvocation to execute
                     * @return the RemoteInvocationResult object
                     * @throws IOException if thrown by I/O operations
                     * @throws ClassNotFoundException if thrown during deserialization
                     * @throws Exception in case of general errors
                     * @see #getHttpInvokerRequestExecutor
                     * @see HttpInvokerClientConfiguration
                     */
                    // @ts-ignore
                    executeRequest(invocation: RemoteInvocation): RemoteInvocationResult
                    /**
                     * Convert the given HTTP invoker access exception to an appropriate
                     * Spring {@link RemoteAccessException}.
                     * @param ex the exception to convert
                     * @return the RemoteAccessException to throw, or {#code null} to have the
                     *  original exception propagated to the caller
                     */
                    // @ts-ignore
                    convertHttpInvokerAccessException(ex: java.lang.Throwable | Error): RemoteAccessException
                }
            }
        }
    }
}
