declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace rmi {
                /**
                 * {@link org.aopalliance.intercept.MethodInterceptor} for accessing conventional
                 * RMI services or RMI invokers. The service URL must be a valid RMI URL
                 * (e.g. "rmi://localhost:1099/myservice").
                 * <p>RMI invokers work at the RmiInvocationHandler level, needing only one stub for
                 * any service. Service interfaces do not have to extend {@code java.rmi.Remote}
                 * or throw {@code java.rmi.RemoteException}. Spring's unchecked
                 * RemoteAccessException will be thrown on remote invocation failure.
                 * Of course, in and out parameters have to be serializable.
                 * <p>With conventional RMI services, this invoker is typically used with the RMI
                 * service interface. Alternatively, this invoker can also proxy a remote RMI service
                 * with a matching non-RMI business interface, i.e. an interface that mirrors the RMI
                 * service methods but does not declare RemoteExceptions. In the latter case,
                 * RemoteExceptions thrown by the RMI stub will automatically get converted to
                 * Spring's unchecked RemoteAccessException.
                 * @author Juergen Hoeller
                 * @since 29.09.2003
                 * @see RmiServiceExporter
                 * @see RmiProxyFactoryBean
                 * @see RmiInvocationHandler
                 * @see org.springframework.remoting.RemoteAccessException
                 * @see java.rmi.RemoteException
                 * @see java.rmi.Remote
                 */
                // @ts-ignore
                class RmiClientInterceptor extends org.springframework.remoting.support.RemoteInvocationBasedAccessor {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set whether to look up the RMI stub on startup. Default is "true".
                     * <p>Can be turned off to allow for late start of the RMI server.
                     * In this case, the RMI stub will be fetched on first access.
                     * @see #setCacheStub
                     */
                    // @ts-ignore
                    setLookupStubOnStartup(lookupStubOnStartup: boolean): void
                    /**
                     * Set whether to cache the RMI stub once it has been located.
                     * Default is "true".
                     * <p>Can be turned off to allow for hot restart of the RMI server.
                     * In this case, the RMI stub will be fetched for each invocation.
                     * @see #setLookupStubOnStartup
                     */
                    // @ts-ignore
                    setCacheStub(cacheStub: boolean): void
                    /**
                     * Set whether to refresh the RMI stub on connect failure.
                     * Default is "false".
                     * <p>Can be turned on to allow for hot restart of the RMI server.
                     * If a cached RMI stub throws an RMI exception that indicates a
                     * remote connect failure, a fresh proxy will be fetched and the
                     * invocation will be retried.
                     * @see java.rmi.ConnectException
                     * @see java.rmi.ConnectIOException
                     * @see java.rmi.NoSuchObjectException
                     */
                    // @ts-ignore
                    setRefreshStubOnConnectFailure(refreshStubOnConnectFailure: boolean): void
                    /**
                     * Set a custom RMI client socket factory to use for accessing the RMI registry.
                     * @see java.rmi.server.RMIClientSocketFactory
                     * @see java.rmi.registry.LocateRegistry#getRegistry(String, int, RMIClientSocketFactory)
                     */
                    // @ts-ignore
                    setRegistryClientSocketFactory(registryClientSocketFactory: java.rmi.server.RMIClientSocketFactory): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    /**
                     * Fetches RMI stub on startup, if necessary.
                     * @throws RemoteLookupFailureException if RMI stub creation failed
                     * @see #setLookupStubOnStartup
                     * @see #lookupStub
                     */
                    // @ts-ignore
                    prepare(): void
                    /**
                     * Create the RMI stub, typically by looking it up.
                     * <p>Called on interceptor initialization if "cacheStub" is "true";
                     * else called for each invocation by {@link #getStub()}.
                     * <p>The default implementation looks up the service URL via
                     * {@code java.rmi.Naming}. This can be overridden in subclasses.
                     * @return the RMI stub to store in this interceptor
                     * @throws RemoteLookupFailureException if RMI stub creation failed
                     * @see #setCacheStub
                     * @see java.rmi.Naming#lookup
                     */
                    // @ts-ignore
                    lookupStub(): java.rmi.Remote
                    /**
                     * Return the RMI stub to use. Called for each invocation.
                     * <p>The default implementation returns the stub created on initialization,
                     * if any. Else, it invokes {@link #lookupStub} to get a new stub for
                     * each invocation. This can be overridden in subclasses, for example in
                     * order to cache a stub for a given amount of time before recreating it,
                     * or to test the stub whether it is still alive.
                     * @return the RMI stub to use for an invocation
                     * @throws RemoteLookupFailureException if RMI stub creation failed
                     * @see #lookupStub
                     */
                    // @ts-ignore
                    getStub(): java.rmi.Remote
                    /**
                     * Fetches an RMI stub and delegates to {@code doInvoke}.
                     * If configured to refresh on connect failure, it will call
                     * {@link #refreshAndRetry} on corresponding RMI exceptions.
                     * @see #getStub
                     * @see #doInvoke(MethodInvocation, Remote)
                     * @see #refreshAndRetry
                     * @see java.rmi.ConnectException
                     * @see java.rmi.ConnectIOException
                     * @see java.rmi.NoSuchObjectException
                     */
                    // @ts-ignore
                    invoke(invocation: MethodInvocation): java.lang.Object
                    /**
                     * Determine whether the given RMI exception indicates a connect failure.
                     * <p>The default implementation delegates to
                     * {@link RmiClientInterceptorUtils#isConnectFailure}.
                     * @param ex the RMI exception to check
                     * @return whether the exception should be treated as connect failure
                     */
                    // @ts-ignore
                    isConnectFailure(ex: java.rmi.RemoteException): boolean
                    /**
                     * Refresh the RMI stub and retry the given invocation.
                     * Called by invoke on connect failure.
                     * @param invocation the AOP method invocation
                     * @return the invocation result, if any
                     * @throws Throwable in case of invocation failure
                     * @see #invoke
                     */
                    // @ts-ignore
                    refreshAndRetry(invocation: MethodInvocation): java.lang.Object
                    /**
                     * Perform the given invocation on the given RMI stub.
                     * @param invocation the AOP method invocation
                     * @param stub the RMI stub to invoke
                     * @return the invocation result, if any
                     * @throws Throwable in case of invocation failure
                     */
                    // @ts-ignore
                    doInvoke(invocation: MethodInvocation, stub: java.rmi.Remote): java.lang.Object
                    /**
                     * Apply the given AOP method invocation to the given {@link RmiInvocationHandler}.
                     * <p>The default implementation delegates to {@link #createRemoteInvocation}.
                     * @param methodInvocation the current AOP method invocation
                     * @param invocationHandler the RmiInvocationHandler to apply the invocation to
                     * @return the invocation result
                     * @throws RemoteException in case of communication errors
                     * @throws NoSuchMethodException if the method name could not be resolved
                     * @throws IllegalAccessException if the method could not be accessed
                     * @throws InvocationTargetException if the method invocation resulted in an exception
                     * @see org.springframework.remoting.support.RemoteInvocation
                     */
                    // @ts-ignore
                    doInvoke(methodInvocation: MethodInvocation, invocationHandler: org.springframework.remoting.rmi.RmiInvocationHandler): java.lang.Object
                }
            }
        }
    }
}
